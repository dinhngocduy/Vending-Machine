import { MachineAdapter } from '../../../../../../../vending-core/model-machine/machine.adapter';
import { IProductMapItem } from "enum/machine";
import { useEffect, useState } from "react";
import { ListProductProps } from "./list-product.props";

const PAGE_SIZE = 10;

export const ListProductAdapter = (props: ListProductProps) => {
    const {machine} = props
    const {getProductMapMachine} = MachineAdapter()
    
    const [listProducts, setListProducts] = useState<IProductMapItem[]>([]);
    const [page, setPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);


    useEffect(() => {
        getProductMap();
      }, [page, props.machine]);

    const getProductMap = () => {
        setLoading(true);
        const data = {
          machineId: machine?.machine?.id,
          page: page - 1,
          size: PAGE_SIZE,
        };
    
        getProductMapMachine(data)
          .then((res: any) => {
            setListProducts([...listProducts,...res?.data])
            setTotalPage(res?.numberOfPages || 0);
            setLoading(false);
          })
          .catch((err: any) => {
            setLoading(false);
          });
      };
    
      const loadMore = () => {
          if(page < totalPage -1 ){
              setPage(page + 1)
          }
      }


    return {
       listProducts,
       loadMore
    }
}