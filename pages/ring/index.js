import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Schedule from "../../components/schedule";
import Collection from "../../components/collection";
import SelectSearch, { fuzzySearch } from "react-select-search-nextjs";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { Skeleton } from "@material-ui/lab";
import _ from "lodash";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import { setWishList } from '../../redux/actions/wishListAction';
import CheckboxTree from 'react-checkbox-tree';
import CheckBox from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';

const options = [
  { name: "ALL", value: "ALL" },
  { name: "POPULAR", value: "POPULAR" },
];

const filterItems = [
  { img: "image1.png", text: "Solitaire with side" },
  { img: "image2.png", text: "Solitaire" },
  { img: "image3.png", text: "Three stone" },
  { img: "image4.png", text: "Halo/framed" },
  { img: "image5.png", text: "promise" },
  { img: "image6.png", text: "brands-diamonds" },
  { img: "image7.png", text: "bands-metals" },
  { img: "image8.png", text: "fashion" },
  { img: "image9.png", text: "mothers/family" },
];
const productItems = [
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
    url: "#",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
    url: "#",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
    url: "#",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
    url: "#",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
    url: "#",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
    url: "#",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
    url: "#",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
    url: "#",
  },
  {
    img: "product(3).png",
    title: "Brilliant Cut Diamond Engagement Ring",
    categories: ["Diamond", "Engagement", "Rings"],
    cost: "$2500",
    url: "#",
  },
];

const productURL = "https://royalcoster.nl/api/product/index.php";
const metarialURL = "https://costercatalog.com/api/index.php?request=getMaterialsGroupedNew";
const materialColorURL = "https://costercatalog.com/api/index.php?request=generateAttributesColor&sync=1'"
const cutURL = "https://costercatalog.com/api/index.php?request=generateAttributesCut&tn=products_short&sync=1"
const mountingURL = "https://costercatalog.com/api/index.php?request=generateAttributesStyle&tn=products_short&sync=1"
const styleURL = "https://costercatalog.com/api/index.php?request=generateAttributesCollection&tn=products_short&sync=1"
const brandURL = "https://costercatalog.com/api/index.php?request=getBrandsGrouped&tn=products_short&sync=1"
const brightnessURL = "https://costercatalog.com/api/index.php?request=generateAttributesClarity&tn=products_short&sync=1";
const stoneURL = "https://costercatalog.com/api/index.php?request=generateAttributesType&tn=products_short&sync=1"
const CTagURL = "https://royalcoster.nl/api/getTags.php";
const headers = {
  // "Content-Type": "application/json",
};

function getFilterValue(str) {
  str = str.toLowerCase();
  var toReplace = ['"', "'", "\\", "(", ")", "[", "]"];
  // For the old browsers
  for (var i = 0; i < toReplace.length; ++i) {
    str = str.replace(toReplace[i], "");
  }
  str = str.replace(/\W+/g, "-");
  if (str.charAt(str.length - 1) == "-") {
    str = str.replace(/-+\z/, "");
  }
  if (str.charAt(0) == "-") {
    str = str.replace(/\A-+/, "");
  }
  return str
}

const firstFilterItem = [
  {
    title: "price", filter: [
      { label: "To €500", value: "to-500" },
      { label: "€1000 - €1499", value: "1000-1499" },
      { label: "€1500 - €2499", value: "1500-2499" },
      { label: "€2500 - €4999", value: "2500-4999" },
      { label: "€5000 - €9999", value: "5000-9999" },
      { label: "More than €10000", value: "more-than-10000" },
    ]
  },
  {
    title: "collection", filter: [
      { label: "Empress Collection", value: "empress-collection" },
      { label: "Rainbow Collection", value: "rainbow-collection" },
      { label: "Luna Collection", value: "luna-collection" },
      { label: "Touch of Glam Collection", value: "touch-of-glam-collection" },
      { label: "Wedding Rings Collection", value: "wedding-rings-collection" },
      { label: "NIKKIE x Royal Coster Diamonds", value: "nikkie-x-royal-coster-diamonds" },
    ]
  },
  { title: "style", filter: [] },
  { title: "mounting", filter: [] },
  { title: "brand", filter: [] },
  { title: "stone", filter: [] },
  { title: "brightness", filter: [] },
  { title: "cut", filter: [] },
  { title: "material", filter: [] },
  { title: "material color", filter: [] },

]

const checkTreeIcons = {
  check: <CheckBox />,
  uncheck: <CheckBoxOutlineBlankIcon />,
  halfCheck: <CheckBoxOutlinedIcon />,
  expandClose: <AddBoxOutlinedIcon />,
  expandOpen: <IndeterminateCheckBoxOutlinedIcon />,
  expandAll: '',
  collapseAll: '',
  parentClose: "",
  parentOpen: "",
  leaf: ""
}

let productStore = [], lastProductStatus, leftFilterStore, check0 = [], check1 = [], check2 = [], check3 = [], check4 = [], check5 = [], check6 = [], check7 = [], check8 = [], check9 = [];

function Ring(props) {
  const [result, setResult] = useState(0);
  const [tags, setTags] = useState("Rings");
  const [selectValue, setSelectValue] = useState("POPULAR");
  const [selectFilter, setSelectFilter] = useState([]);
  const [productData, setProductData] = useState([]);
  const [lastProduct, setLastProduct] = useState();
  const [leftFilterItems, setLeftFilterItems] = useState(firstFilterItem);
  const [load, setLoad] = useState(false);
  const [formData, setFormData] = useState();
  const [checked0, setChecked0] = useState(check0);
  const [checked1, setChecked1] = useState(check1);
  const [checked2, setChecked2] = useState(check2);
  const [checked3, setChecked3] = useState(check3);
  const [checked4, setChecked4] = useState(check4);
  const [checked5, setChecked5] = useState(check5);
  const [checked6, setChecked6] = useState(check6);
  const [checked7, setChecked7] = useState(check7);
  const [checked8, setChecked8] = useState(check8);
  const [checked9, setChecked9] = useState(check9);
  const [expanded, setExpanded] = useState([]);
  const [totalFilterItems, setTotalFilterItems] = useState([]);
  const [cTagLastAdd, setCTagLastAdd] = useState(1);
  const [cTags, setCTags] = useState([]);
  const [cTagMiddleStore, setCTagMiddleStore] = useState([]);
  const [loadMoreStatus, setLoadMoreStatus] = useState(false);
  const [totalCounter, setTotalCounter] = useState(0)
  const [mounted, setMounted] = useState(false);
  const [filterMounted, setFilterMounted] = useState(false);

  useEffect(() => {
    if (formData) {
      fetch(productURL, {
        method: "post",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setLoad(false);
          if (data.hasNextPage == 'Yes') {
            setLastProduct(data.last);
            lastProductStatus = data.last;
          } else {
            setLastProduct(false);
            lastProductStatus = false;
          }
          setProductData(data.data);
          productStore = data.data;
          if (localStorage.wishList) {
            props.setWishList(JSON.parse(localStorage.wishList));
          }
        });
    }
  }, [formData]);

  useEffect(() => {
    if (cTags) {
      console.log(cTags)
      fetch(styleURL, {
        method: 'get',
        headers,
      })
        .then((res) => res.json())
        .then((style) => {
          let middleArr = [];
          let valueArr = style.Collection.split(',');
          valueArr.map((item, index) => {
            if (cTags.find(ctag => ctag == getFilterValue(item))) {
              middleArr.push({ label: item, value: getFilterValue(item) })
            }
            if (index == valueArr.length - 1) {
              let filterArr = leftFilterItems;
              filterArr[2].filter = middleArr;
              setLeftFilterItems([...filterArr]);
            }
          })
          fetch(mountingURL, {
            method: 'get',
            headers,
          })
            .then((res) => res.json())
            .then((mounting) => {
              let middleArr = [];
              let valueArr = mounting.Style.split(',');
              valueArr.map((item, index) => {
                if (cTags.find(ctag => ctag == getFilterValue(item))) {
                  middleArr.push({ label: item, value: getFilterValue(item) })
                }
                if (index == valueArr.length - 1) {
                  let filterArr = leftFilterItems;
                  filterArr[3].filter = middleArr;
                  setLeftFilterItems([...filterArr]);
                }
              })
              fetch(brandURL, {
                method: 'get',
                headers,
              })
                .then((res) => res.json())
                .then((brands) => {
                  let middleArr = [];
                  brands = brands.find(item => item.MainGroup == tags)
                  let brandsArr = brands.BrandID.split(',');
                  brandsArr.map((item, index) => {
                    if (cTags.find(ctag => ctag == getFilterValue(item))) {
                      middleArr.push({ label: item, value: getFilterValue(item) })
                    }
                    if (index == brandsArr.length - 1) {
                      let filterArr = leftFilterItems;
                      filterArr[4].filter = middleArr;
                      setLeftFilterItems([...filterArr]);
                    }
                  })
                  fetch(stoneURL, {
                    method: "get",
                    headers,
                  })
                    .then((res) => res.json())
                    .then((stones) => {
                      let stoneArr = [];
                      let counter = [];
                      for (const key in stones) {
                        if (Object.hasOwnProperty.call(stones, key)) {
                          let middleArr = [];
                          counter++;
                          const element = stones[key];
                          let itemArr = [];
                          if (element.length == 1) {
                            if (cTags.find(ctag => ctag == getFilterValue(element[0]))) {
                              middleArr.push({ label: element[0], value: getFilterValue(element[0]) })
                            }
                          } else {
                            element.map((item, index) => {
                              if (cTags.find(ctag => ctag == getFilterValue(item))) {
                                itemArr.push({ label: item, value: getFilterValue(item) })
                              }
                              if (index == element.length - 1) {
                                if (itemArr.length) {
                                  if (itemArr.length == 1) {
                                    middleArr.push({ label: itemArr[0].label, value: itemArr[0].value })
                                  } else {
                                    middleArr.push({ label: key, value: getFilterValue(key) + 1, children: itemArr });
                                  }
                                }
                              }
                            })
                          }
                          stoneArr.push(...middleArr)
                          if (counter == _.size(stones)) {
                            let filterArr = leftFilterItems;
                            filterArr[5].filter = stoneArr;
                            setLeftFilterItems([...filterArr])
                          }
                        }
                      }
                      fetch(brightnessURL, {
                        method: "get",
                        headers,
                      })
                        .then((res) => res.json())
                        .then((brightness) => {
                          let brightnessArr = [];
                          let counter = [];
                          for (const key in brightness) {
                            if (Object.hasOwnProperty.call(brightness, key)) {
                              let middleArr = [];
                              const element = brightness[key];
                              counter++;
                              let itemArr = [];
                              if (element.length == 1) {
                                if (cTags.find(ctag => ctag == getFilterValue(element[0]))) {
                                  middleArr.push({ label: element[0], value: getFilterValue(element[0]) })
                                }
                              } else {
                                element.map((item, index) => {
                                  if (cTags.find(ctag => ctag == getFilterValue(item))) {
                                    itemArr.push({ label: item, value: getFilterValue(item) })
                                  }
                                  if (index == element.length - 1) {
                                    if (itemArr.length) {
                                      if (itemArr.length == 1) {
                                        middleArr.push({ label: itemArr[0].label, value: itemArr[0].value })
                                      } else {
                                        middleArr.push({ label: key, value: getFilterValue(key) + 1, children: itemArr });
                                      }
                                    }
                                  }
                                })
                              }
                              brightnessArr.push(...middleArr)
                              if (counter == _.size(stones)) {
                                let filterArr = leftFilterItems;
                                filterArr[6].filter = brightnessArr;
                                setLeftFilterItems([...filterArr])
                              }
                            }
                          }
                          fetch(cutURL, {
                            method: "get",
                            headers,
                          })
                            .then((res) => res.json())
                            .then((cut) => {
                              let cutArr = [];
                              let counter = 0;
                              for (const key in cut) {
                                if (Object.hasOwnProperty.call(cut, key)) {
                                  let middleArr = [];
                                  const element = cut[key];
                                  counter++;
                                  let itemArr = [];
                                  if (element.length == 1) {
                                    if (cTags.find(ctag => ctag == getFilterValue(element[0]))) {
                                      middleArr.push({ label: element[0], value: getFilterValue(element[0]) })
                                    }
                                  } else {
                                    element.map((item, index) => {
                                      if (cTags.find(ctag => ctag == getFilterValue(item))) {
                                        itemArr.push({ label: item, value: getFilterValue(item) })
                                      }
                                      if (index == element.length - 1) {
                                        if (itemArr.length) {
                                          if (itemArr.length == 1) {
                                            middleArr.push({ label: itemArr[0].label, value: itemArr[0].value })
                                          } else {
                                            middleArr.push({ label: key, value: getFilterValue(key) + 1, children: itemArr });
                                          }
                                        }
                                      }
                                    })
                                  }
                                  cutArr.push(...middleArr)
                                  if (counter == _.size(cut)) {
                                    let filterArr = leftFilterItems;
                                    filterArr[7].filter = cutArr;
                                    setLeftFilterItems([...filterArr])
                                  }
                                }
                              }
                              fetch(metarialURL, {
                                method: "get",
                                headers,
                              })
                                .then((res) => res.json())
                                .then((metarial) => {
                                  metarial = metarial[0].colorDesc;
                                  let middleArr = [];
                                  let valueArr = metarial.split(',');
                                  valueArr.map((item, index) => {
                                    if (item == '18k Gold') {
                                      item = '18k'
                                    } else if (item == '14k Gold') {
                                      item = '14k'
                                    }
                                    if (cTags.find(ctag => ctag == getFilterValue(item))) {
                                      middleArr.push({ label: item == '18k' ? '18k Gold' : item == '14k' ? '14k Gold' : item, value: getFilterValue(item) })
                                    }
                                    if (index == valueArr.length - 1) {
                                      let filterArr = leftFilterItems;
                                      filterArr[8].filter = middleArr;
                                      setLeftFilterItems([...filterArr]);
                                    }
                                  })

                                  fetch(materialColorURL, {
                                    method: "get",
                                    headers,
                                  })
                                    .then((res) => res.json())
                                    .then((materialColor) => {
                                      let materialColorArr = [];
                                      let counter = 0;
                                      for (const key in materialColor) {
                                        if (Object.hasOwnProperty.call(materialColor, key)) {
                                          let middleArr = [];
                                          counter++;
                                          const element = materialColor[key];
                                          let itemArr = [];
                                          if (element.length == 1) {
                                            if (cTags.find(ctag => ctag == getFilterValue(element[0]))) {
                                              middleArr.push({ label: element[0], value: getFilterValue(element[0]) })
                                            }
                                          } else {
                                            element.map((item, index) => {
                                              if (cTags.find(ctag => ctag == getFilterValue(item))) {
                                                itemArr.push({ label: item, value: getFilterValue(item) })
                                              }
                                              if (index == element.length - 1) {
                                                if (itemArr.length) {
                                                  if (itemArr.length == 1) {
                                                    middleArr.push({ label: itemArr[0].label, value: itemArr[0].value })
                                                  } else {
                                                    middleArr.push({ label: key, value: getFilterValue(key) + 1, children: itemArr });
                                                  }
                                                }
                                              }
                                            })
                                          }
                                          materialColorArr.push(...middleArr)
                                          if (counter == _.size(materialColor)) {
                                            let filterArr = leftFilterItems;
                                            filterArr[9].filter = materialColorArr;
                                            setLeftFilterItems([...filterArr]);
                                            leftFilterStore = [...filterArr];
                                          }
                                        }
                                      }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        });
    }
  }, [cTags]);

  useEffect(() => {
    props.wishList &&
      localStorage.setItem('wishList', JSON.stringify(props.wishList))
  }, [props.wishList])

  useEffect(() => {
    if (filterMounted) {
      let formData = new FormData();
      if (cTagLastAdd == 1) {
        formData.append('position', 'first:50');
      } else {
        formData.append('position', 'first:50,after:' + '"' + cTagLastAdd + '"');
      }
      formData.append('query', 'status:active AND product_type:Rings');
      fetch(CTagURL, {
        method: 'post',
        body: formData,
      }).then((res) => res.json())
        .then((data) => {
          let middleArr = [];
          if (data.last) {
            setTotalCounter(totalCounter + data.productsCount)
            let tags = cTagMiddleStore;
            data.tags.map((tag, index) => {
              if (!tags.find(item => item == getFilterValue(tag))) {
                middleArr.push(getFilterValue(tag));
              }
              if (index == data.tags.length - 1) {
                setCTagMiddleStore([...cTagMiddleStore, ...middleArr])
                if (data.hasNextPage == 'No') {
                  setResult(totalCounter + data.productsCount)
                  setCTags([...cTagMiddleStore, ...middleArr])
                }
              }
            })
            if (data.hasNextPage == 'Yes') {
              setCTagLastAdd(data.last)
            }
          }
        })
    } else {
      if (leftFilterStore) {
        setLeftFilterItems(leftFilterStore);
      } else {
        let formData = new FormData();
        if (cTagLastAdd == 1) {
          formData.append('position', 'first:50');
        } else {
          formData.append('position', 'first:50,after:' + '"' + cTagLastAdd + '"');
        }
        formData.append('query', 'status:active AND product_type:Rings');
        fetch(CTagURL, {
          method: 'post',
          body: formData,
        }).then((res) => res.json())
          .then((data) => {
            let middleArr = [];
            if (data.last) {
              setTotalCounter(totalCounter + data.productsCount)
              let tags = cTagMiddleStore;
              data.tags.map((tag, index) => {
                if (!tags.find(item => item == getFilterValue(tag))) {
                  middleArr.push(getFilterValue(tag));
                }
                if (index == data.tags.length - 1) {
                  setCTagMiddleStore([...cTagMiddleStore, ...middleArr])
                  if (data.hasNextPage == 'No') {
                    setResult(totalCounter + data.productsCount)
                    setCTags([...cTagMiddleStore, ...middleArr])
                  }
                }
              })
              if (data.hasNextPage == 'Yes') {
                setCTagLastAdd(data.last)
              }
            }
          })
      }
    }
    setFilterMounted(true);
  }, [cTagLastAdd])

  useEffect(() => {
    if (checked0 && mounted) {
      check0 = checked0;
      check1 = checked1;
      check2 = checked2;
      check3 = checked3;
      check4 = checked4;
      check5 = checked5;
      check6 = checked6;
      check7 = checked7;
      check8 = checked8;
      check9 = checked9;
      let query0 = checked0.length > 0 ? (checked0.map((filter, index) => index == 0 ? (" AND (tag:" + filter) : (" OR tag:" + filter)) + ")").replaceAll(',', '') : ''
      let query1 = checked1.length > 0 ? (checked1.map((filter, index) => index == 0 ? (" AND (tag:" + filter) : (" OR tag:" + filter)) + ")").replaceAll(',', '') : ''
      let query2 = checked2.length > 0 ? (checked2.map((filter, index) => index == 0 ? (" AND (tag:" + filter) : (" OR tag:" + filter)) + ")").replaceAll(',', '') : ''
      let query3 = checked3.length > 0 ? (checked3.map((filter, index) => index == 0 ? (" AND (tag:" + filter) : (" OR tag:" + filter)) + ")").replaceAll(',', '') : ''
      let query4 = checked4.length > 0 ? (checked4.map((filter, index) => index == 0 ? (" AND (tag:" + filter) : (" OR tag:" + filter)) + ")").replaceAll(',', '') : ''
      let query5 = checked5.length > 0 ? (checked5.map((filter, index) => index == 0 ? (" AND (tag:" + filter) : (" OR tag:" + filter)) + ")").replaceAll(',', '') : ''
      let query6 = checked6.length > 0 ? (checked6.map((filter, index) => index == 0 ? (" AND (tag:" + filter) : (" OR tag:" + filter)) + ")").replaceAll(',', '') : ''
      let query7 = checked7.length > 0 ? (checked7.map((filter, index) => index == 0 ? (" AND (tag:" + filter) : (" OR tag:" + filter)) + ")").replaceAll(',', '') : ''
      let query8 = checked8.length > 0 ? (checked8.map((filter, index) => index == 0 ? (" AND (tag:" + filter) : (" OR tag:" + filter)) + ")").replaceAll(',', '') : ''
      let query9 = checked9.length > 0 ? (checked9.map((filter, index) => index == 0 ? (" AND (tag:" + filter) : (" OR tag:" + filter)) + ")").replaceAll(',', '') : ''
      setLoad(true)
      let data = new FormData();
      data.append("position", "first:9");
      data.append("query", ("status:active AND product_type:Rings" + query0 + query1 + query2 + query3 + query4 + query5 + query6 + query7 + query8 + query9))
      setFormData(data);
    } else {
      if (productStore.length) {
        console.log(123)
        console.log(check0)
        setProductData(productStore);
        setLastProduct(lastProductStatus);
        if (localStorage.wishList) {
          props.setWishList(JSON.parse(localStorage.wishList));
        }
      }
      else {
        console.log(3333333)
        setLoad(true)
        let data = new FormData();
        data.append("position", "first:9");
        data.append("query", "status:active AND product_type:Rings")
        setFormData(data);
      }
    }
    setMounted(true)
  }, [checked0, checked1, checked2, checked3, checked4, checked5, checked6, checked7, checked8, checked9])

  const setFavor = (event, product) => {
    let target = event.target.closest(".favor-icon");
    if (target.classList.contains("favor")) {
      let localProducts = props.wishList;
      let removeProduct = localProducts.find(
        (item) => item.shopifyid == product.shopifyid
      );
      if (removeProduct) {
        localProducts.splice(localProducts.indexOf(removeProduct), 1);
        props.setWishList(localProducts)
      }
    } else {
      if (localStorage.wishList) {
        props.setWishList([...props.wishList, { ...product, amount: 1, product_type: tags }])
      } else {
        localStorage.setItem(
          "wishList",
          JSON.stringify([{ ...product, amount: 1, product_type: tags }])
        );
        props.setWishList([{ ...product, amount: 1, product_type: tags }])
      }
    }
  };

  const filterHandle = (event, index) => {
    let target = event.target.closest(".filter-item");
    if (target.classList.contains("active")) {
      let removeItem = selectFilter.indexOf(filterItems[index].text);
      if (!removeItem) {
        selectFilter.splice(removeItem, 1);
        setSelectFilter([...selectFilter]);
      } else {
        selectFilter.splice(-1, 1);
      }
      target.classList.remove("active");
    } else {
      target.classList.add("active");
      setSelectFilter([...selectFilter, filterItems[index].text]);
    }
  };

  const loadMore = () => {
    setLoadMoreStatus(true);
    let formData = new FormData();
    let query0 = checked0.length > 0 ? (checked0.map((filter, index) => index == 0 ? (" AND (tag:" + filter) : (" OR tag:" + filter)) + ")").replaceAll(',', '') : ''
    let query1 = checked1.length > 0 ? (checked1.map((filter, index) => index == 0 ? (" AND (tag:" + filter) : (" OR tag:" + filter)) + ")").replaceAll(',', '') : ''
    let query2 = checked2.length > 0 ? (checked2.map((filter, index) => index == 0 ? (" AND (tag:" + filter) : (" OR tag:" + filter)) + ")").replaceAll(',', '') : ''
    let query3 = checked3.length > 0 ? (checked3.map((filter, index) => index == 0 ? (" AND (tag:" + filter) : (" OR tag:" + filter)) + ")").replaceAll(',', '') : ''
    let query4 = checked4.length > 0 ? (checked4.map((filter, index) => index == 0 ? (" AND (tag:" + filter) : (" OR tag:" + filter)) + ")").replaceAll(',', '') : ''
    let query5 = checked5.length > 0 ? (checked5.map((filter, index) => index == 0 ? (" AND (tag:" + filter) : (" OR tag:" + filter)) + ")").replaceAll(',', '') : ''
    let query6 = checked6.length > 0 ? (checked6.map((filter, index) => index == 0 ? (" AND (tag:" + filter) : (" OR tag:" + filter)) + ")").replaceAll(',', '') : ''
    let query7 = checked7.length > 0 ? (checked7.map((filter, index) => index == 0 ? (" AND (tag:" + filter) : (" OR tag:" + filter)) + ")").replaceAll(',', '') : ''
    let query8 = checked8.length > 0 ? (checked8.map((filter, index) => index == 0 ? (" AND (tag:" + filter) : (" OR tag:" + filter)) + ")").replaceAll(',', '') : ''
    let query9 = checked9.length > 0 ? (checked9.map((filter, index) => index == 0 ? (" AND (tag:" + filter) : (" OR tag:" + filter)) + ")").replaceAll(',', '') : ''
    formData.append("position", `first:9, after:"${lastProduct}"`);
    formData.append("query", ("status:active AND product_type:Rings" + query0 + query1 + query2 + query3 + query4 + query5 + query6 + query7 + query8 + query9))
    fetch(productURL, {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        data.hasNextPage == "Yes" ? setLastProduct(data.last) : setLastProduct(false);
        setProductData([...productData, ...data.data]);
        setLoadMoreStatus(false);
      });
  };

  return (
    <div className="ring_page">
      <Head>
        <title>Ring | Royal Coster</title>
      </Head>
      <Header />
      {/* Start hero section */}
      <div className="hero-section">
        <div className="r-container">
          <h1 className="title text-white">Rings</h1>
        </div>
      </div>
      {/* End Hero section */}

      {/* Start product section */}
      <div className="product-section r-container py-4">
        <div className="top-bar row align-items-center m-0 py-3">
          <div className="title-panel col-md-6 col-12 p-0 pb-md-0 pb-3">
            <h2>Engagement Rings</h2>
            <p className="text-uppercase">{result} results</p>
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-end p-0 pt-3 pt-md-0">
            <div className="search-box round-form d-flex align-items-center">
              <label htmlFor="selectSearch" className="px-4">
                SORT BY :{" "}
              </label>
              <SelectSearch
                id="selectSearch"
                options={options}
                value={selectValue}
                onChange={(value) => {
                  setSelectValue(value);
                }}
                filterOptions={fuzzySearch}
                emptyMessage="Not found"
                search
              />
            </div>
          </div>
        </div>
        <div className="top-filter-bar d-flex justify-content-between align-items-center flex-wrap py-4">
          {filterItems.map((item, index) => {
            return (
              <button
                className="btn filter-item round-form mt-3"
                key={index}
                onClick={(event) => filterHandle(event, index)}
              >
                <div className="image-panel text-center">
                  <img src={"/img/ring/" + item.img} alt="filter-image" />
                </div>
                <h3 className="blue-text text-uppercase">{item.text}</h3>
              </button>
            );
          })}
        </div>
        <div className="main-panel d-flex m-0 py-5 justify-content-end flex-wrap">
          <div className="col-lg-3 col-md-4 col-sm-5 col-12 p-0 pe-sm-4 pe-0 mb-sm-0 mb-5 left-filter-bar">
            {leftFilterItems.length && leftFilterItems.map((item, index) => {
              return (
                <div className="accordion-item mb-3" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button blue-text collapsed text-uppercase py-3 ps-4"
                      data-bs-target={"#index" + index}
                      data-bs-toggle="collapse"
                    >
                      {item.title}
                    </button>
                  </h2>
                  <div
                    id={"index" + index}
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <CheckboxTree
                        nodes={item.filter}
                        checked={index == 0 ? checked0 : index == 1 ? checked1 : index == 2 ? checked2 : index == 3 ? checked3 : index == 4 ? checked4 : index == 5 ? checked5 : index == 6 ? checked6 : index == 7 ? checked7 : index == 8 ? checked8 : checked9}
                        expanded={expanded}
                        onCheck={checkValue => index == 0 ? setChecked0(checkValue) : index == 1 ? setChecked1(checkValue) : index == 2 ? setChecked2(checkValue) : index == 3 ? setChecked3(checkValue) : index == 4 ? setChecked4(checkValue) : index == 5 ? setChecked5(checkValue) : index == 6 ? setChecked6(checkValue) : index == 7 ? setChecked7(checkValue) : index == 8 ? setChecked8(checkValue) : setChecked9(checkValue)}
                        onExpand={expandValue => setExpanded(expandValue)}
                        icons={checkTreeIcons}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* {false ? ( */}
          {!load && productData && productData.length > 0 ? (
            <div className="col-lg-9 col-md-8 col-sm-7 col-12 p-0 product-panel m-0">
              <div className='row m-0'>
                {productData.map((item, index) => {
                  return (
                    <div
                      className="product-item col-lg-4 col-md-6 col-sm-12 mb-4"
                      key={index}
                    >
                      <Link
                        href={{
                          pathname: "/ring/[slug]",
                          query: {
                            slug: getFilterValue(item.title) + "-" + item.shopifyid,
                          },
                        }} >
                        <a>
                          <div className="product-image hover-scale d-flex justify-content-center align-items-center round">
                            <img src={item.image} alt="product-image" />
                          </div>
                          <h3 className="text-uppercase blue-text my-4 m-0">
                            {item.title}
                          </h3>
                          <p className="pb-4 text-uppercase m-0">
                            {tags &&
                              <span className="me-2">
                                {tags}
                              </span>
                            }
                          </p>
                          {+item.Fullprice > +item.price ? (
                            <div className="d-flex price-panel">
                              <h4 className="blue-text me-3">
                                <NumberFormat
                                  value={item.price}
                                  displayType="text"
                                  decimalScale={2}
                                  fixedDecimalScale={true}
                                  thousandSeparator={true}
                                  prefix="€ "
                                />
                              </h4>
                              <h4 className="full-price text-decoration-line-through">
                                <NumberFormat
                                  value={item.Fullprice}
                                  displayType="text"
                                  decimalScale={2}
                                  fixedDecimalScale={true}
                                  thousandSeparator={true}
                                  prefix="€ "
                                />
                              </h4>
                            </div>
                          ) : (
                            <div className="price-panel">
                              <h4 className="blue-text me-3">
                                <NumberFormat
                                  value={item.Fullprice}
                                  displayType="text"
                                  decimalScale={2}
                                  fixedDecimalScale={true}
                                  thousandSeparator={true}
                                  prefix="€ "
                                />
                              </h4>
                            </div>
                          )}
                        </a>
                      </Link>
                      <button
                        className={
                          "btn favor-icon " +
                          `${props.wishList &&
                            props.wishList.find(
                              (product) => product.shopifyid == item.shopifyid
                            )
                            ? "favor"
                            : ""
                          }`
                        }
                        onClick={(e) => setFavor(e, item)}
                      >
                        <RiHeartLine className="unfavor" />
                        <RiHeartFill className="favor" />
                      </button>
                    </div>
                  );
                })}
              </div>
              {
                loadMoreStatus && (
                  <div className="m-0 mt-4 row">
                    <div className="col-lg-4 col-md-6 col-12">
                      <Skeleton
                        animation="wave"
                        variant="rect"
                        width="100%"
                        height={300}
                      />
                      <Skeleton
                        animation="wave"
                        variant="text"
                        width={100}
                        height={20}
                      />
                      <Skeleton
                        animation="wave"
                        variant="text"
                        width="100%"
                        height={40}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <Skeleton
                        animation="wave"
                        variant="rect"
                        width="100%"
                        height={300}
                      />
                      <Skeleton
                        animation="wave"
                        variant="text"
                        width={100}
                        height={20}
                      />
                      <Skeleton
                        animation="wave"
                        variant="text"
                        width="100%"
                        height={40}
                      />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-lg-block d-none">
                      <Skeleton
                        animation="wave"
                        variant="rect"
                        width="100%"
                        height={300}
                      />
                      <Skeleton
                        animation="wave"
                        variant="text"
                        width={100}
                        height={20}
                      />
                      <Skeleton
                        animation="wave"
                        variant="text"
                        width="100%"
                        height={40}
                      />
                    </div>
                  </div>
                )
              }
              {lastProduct && (
                <button
                  className="btn load-more-btn text-uppercase py-3 px-5 mt-3 round-form"
                  onClick={loadMore}
                >
                  Load More
                </button>
              )}
            </div>
          ) : !load ? <h3 className="none-text text-center col-lg-9 col-md-8 col-sm-7 col-12 p-0">None diaplay product</h3>
            : <div className="col-lg-9 col-md-8 col-sm-7 col-12 p-0 row">
              <div className="col-lg-4 col-md-6 col-12">
                <Skeleton
                  animation="wave"
                  variant="rect"
                  width="100%"
                  height={300}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={100}
                  height={20}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="100%"
                  height={40}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <Skeleton
                  animation="wave"
                  variant="rect"
                  width="100%"
                  height={300}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={100}
                  height={20}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="100%"
                  height={40}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-lg-block d-none">
                <Skeleton
                  animation="wave"
                  variant="rect"
                  width="100%"
                  height={300}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width={100}
                  height={20}
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="100%"
                  height={40}
                />
              </div>
            </div>
          }
        </div>
      </div>
      {/* End product section */}
      {/* Start Collection section */}
      <div className="collection-section">
        <Collection />
        <div className="shadow-pink" />
        <div className="shadow-blue" />
      </div>
      {/* End Collection section */}
      {/* Start Schedule section */}
      <Schedule />
      {/* End Schedule section */}
      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </div >
  );
}



const mapStateToProps = state => ({
  wishList: state.wishList.value
});

const mapDispatchToProps = {
  setWishList: setWishList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Ring)