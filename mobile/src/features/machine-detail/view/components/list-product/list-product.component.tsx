import { IProductMapItem } from 'enum/machine';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListProductData from 'sample-data/list-product';
import { ListProductItemComponent } from './list-product-item/list-product-item.component';
import { ListProductItemProps } from './list-product-item/list-product-item.props';
import { ListProductAdapter } from './list-product.adapter';
import { ListProductProps } from './list-product.props';

export const ListProductComponent = (props: ListProductProps) => {

  const {listProducts , loadMore} = ListProductAdapter(props)

  const renderItem = (item: IProductMapItem) => {
    return (
      <ListProductItemComponent
        id={item.product.code}
        capacity={item.capacity}
        stock={item.remain}
        name={item.product.name}
        price={item.price}
        image = {item.product.imageDetail}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_ctn}>
        <Text style={styles.title}>Danh sách sản phẩm</Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList data={listProducts} renderItem={({ item }) => renderItem(item)} onEndReached = {loadMore} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  title_ctn: {
    paddingHorizontal: 16,
    paddingVertical: 13,
    backgroundColor: '#F5F8FB',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4D5971',
  },
});
