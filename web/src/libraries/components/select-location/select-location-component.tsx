import makeAnimated from "react-select/animated";
import Select from "react-select";
import "./select-location.scss";
import cityData from "../../json/location-data/cities.json";
import districtData from "../../json/location-data/districts.json";
import wardData from "../../json/location-data/wards.json";
import { ConvertLocationJsonToOptionData } from "libraries/utils/convert-loction-json-to-option-data";
import {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { IOption } from "libraries/types/type";
import { SelectLocationProps } from "./select-location.props";

export interface SelectLocationRefProps {
  city: string;
  district: string;
  ward: string;
  address: string;
}

export const SelectLocationComponent = forwardRef(
  (props: SelectLocationProps, ref: Ref<SelectLocationRefProps>) => {
    useImperativeHandle(ref, () => ({
      city: city?.value?.name_with_type,
      district: district?.value?.name_with_type,
      ward: ward?.value?.name_with_type,
      address: address,
    }));

    const animatedComponents = makeAnimated();
    const { defaultValue } = props;

    const [city, setCity] = useState<any>();
    const [district, setDistrict] = useState<any>();
    const [ward, setWard] = useState<any>();
    const [listDistrict, setListDistrict] = useState<IOption[]>();
    const [listWard, setListWard] = useState<IOption[]>();
    const [address, setAddress] = useState<string>("");

    useEffect(() => {
      if (defaultValue) {
        setCity(undefined);
        setDistrict(undefined);
        setWard(undefined);
        cityData.find((item) => {
          if (item.name_with_type === defaultValue.city) {
            setCity({
              label: item.name_with_type,
              value: item,
            });
          }
        });
        districtData.find((item) => {
          if (item.name_with_type === defaultValue.district) {
            setDistrict({
              label: item.name_with_type,
              value: item,
            });
          }
        });
        wardData.find((item) => {
          if (item.name_with_type === defaultValue.ward) {
            setWard({
              label: item.name_with_type,
              value: item,
            });
          }
        });
        setAddress(defaultValue.address);
      }
    }, [defaultValue]);

    useEffect(() => {
      const dis = districtData.filter((item) => {
        if (item.parent_code === city?.value?.code) {
          return item;
        }
      });
      setListDistrict(ConvertLocationJsonToOptionData(dis));
    }, [city]);

    useEffect(() => {
      const ward = wardData.filter((item) => {
        if (item.parent_code === district?.value?.code) {
          return item;
        }
      });
      setListWard(ConvertLocationJsonToOptionData(ward));
    }, [district]);

    return (
      <div className="select-location-ctn">
        <p className="select-location-label">
          Vị trí<p> * </p>{" "}
        </p>
        <div className="selection-loction-content">
          <Select
            classNamePrefix="option-ctn"
            closeMenuOnSelect={true}
            components={animatedComponents}
            options={ConvertLocationJsonToOptionData(cityData)}
            placeholder={"Chọn tỉnh/ thành phố"}
            onChange={(value) => {
              setCity(value);
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 8,
              controlHeight: 20,
              colors: {
                ...theme.colors,
              },
            })}
            value={city}
          />
          <Select
            classNamePrefix="option-ctn"
            closeMenuOnSelect={true}
            components={animatedComponents}
            options={listDistrict}
            placeholder={"Chọn quận/ huyện"}
            onChange={(value) => {
              setDistrict(value);
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 8,
              controlHeight: 20,
              colors: {
                ...theme.colors,
              },
            })}
            value={district}
          />
          <Select
            classNamePrefix="option-ctn"
            closeMenuOnSelect={true}
            components={animatedComponents}
            options={listWard}
            placeholder={"Chọn phường/ xã"}
            onChange={(value) => {
              setWard(value);
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 8,
              controlHeight: 20,
              colors: {
                ...theme.colors,
              },
            })}
            value={ward}
          />
          <input
            placeholder={"Nhập địa chỉ"}
            value={address}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        </div>
      </div>
    );
  }
);
