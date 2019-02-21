/*模拟数据省市*/
var datas = [{"id":"110000","children":[{"id":"110100","name":"北京市"}],"name":"北京市"},{"id":"120000","children":[{"id":"120100","name":"天津市"}],"name":"天津市"},{"id":"130000","children":[{"id":"130100","name":"石家庄市"},{"id":"130200","name":"唐山市"},{"id":"130300","name":"秦皇岛市"},{"id":"130400","name":"邯郸市"},{"id":"130500","name":"邢台市"},{"id":"130600","name":"保定市"},{"id":"130700","name":"张家口市"},{"id":"130800","name":"承德市"},{"id":"130900","name":"沧州市"},{"id":"131000","name":"廊坊市"},{"id":"131100","name":"衡水市"}],"name":"河北省"},{"id":"140000","children":[{"id":"140100","name":"太原市"},{"id":"140200","name":"大同市"},{"id":"140300","name":"阳泉市"},{"id":"140400","name":"长治市"},{"id":"140500","name":"晋城市"},{"id":"140600","name":"朔州市"},{"id":"140700","name":"晋中市"},{"id":"140800","name":"运城市"},{"id":"140900","name":"忻州市"},{"id":"141000","name":"临汾市"},{"id":"141100","name":"吕梁市"}],"name":"山西省"},{"id":"150000","children":[{"id":"150100","name":"呼和浩特市"},{"id":"150200","name":"包头市"},{"id":"150300","name":"乌海市"},{"id":"150400","name":"赤峰市"},{"id":"150500","name":"通辽市"},{"id":"150600","name":"鄂尔多斯市"},{"id":"150700","name":"呼伦贝尔市"},{"id":"150800","name":"巴彦淖尔市"},{"id":"150900","name":"乌兰察布市"},{"id":"152200","name":"兴安盟"},{"id":"152500","name":"锡林郭勒盟"},{"id":"152900","name":"阿拉善盟"}],"name":"内蒙古自治区"},{"id":"210000","children":[{"id":"210100","name":"沈阳市"},{"id":"210200","name":"大连市"},{"id":"210300","name":"鞍山市"},{"id":"210400","name":"抚顺市"},{"id":"210500","name":"本溪市"},{"id":"210600","name":"丹东市"},{"id":"210700","name":"锦州市"},{"id":"210800","name":"营口市"},{"id":"210900","name":"阜新市"},{"id":"211000","name":"辽阳市"},{"id":"211100","name":"盘锦市"},{"id":"211200","name":"铁岭市"},{"id":"211300","name":"朝阳市"},{"id":"211400","name":"葫芦岛市"}],"name":"辽宁省"},{"id":"220000","children":[{"id":"220100","name":"长春市"},{"id":"220200","name":"吉林市"},{"id":"220300","name":"四平市"},{"id":"220400","name":"辽源市"},{"id":"220500","name":"通化市"},{"id":"220600","name":"白山市"},{"id":"220700","name":"松原市"},{"id":"220800","name":"白城市"},{"id":"222400","name":"延边朝鲜族自治州"}],"name":"吉林省"},{"id":"230000","children":[{"id":"230100","name":"哈尔滨市"},{"id":"230200","name":"齐齐哈尔市"},{"id":"230300","name":"鸡西市"},{"id":"230400","name":"鹤岗市"},{"id":"230500","name":"双鸭山市"},{"id":"230600","name":"大庆市"},{"id":"230700","name":"伊春市"},{"id":"230800","name":"佳木斯市"},{"id":"230900","name":"七台河市"},{"id":"231000","name":"牡丹江市"},{"id":"231100","name":"黑河市"},{"id":"231200","name":"绥化市"},{"id":"232700","name":"大兴安岭地区"}],"name":"黑龙江省"},{"id":"310000","children":[{"id":"310100","name":"上海市"}],"name":"上海市"},{"id":"320000","children":[{"id":"320100","name":"南京市"},{"id":"320200","name":"无锡市"},{"id":"320300","name":"徐州市"},{"id":"320400","name":"常州市"},{"id":"320500","name":"苏州市"},{"id":"320600","name":"南通市"},{"id":"320700","name":"连云港市"},{"id":"320800","name":"淮安市"},{"id":"320900","name":"盐城市"},{"id":"321000","name":"扬州市"},{"id":"321100","name":"镇江市"},{"id":"321200","name":"泰州市"},{"id":"321300","name":"宿迁市"}],"name":"江苏省"},{"id":"330000","children":[{"id":"330100","name":"杭州市"},{"id":"330200","name":"宁波市"},{"id":"330300","name":"温州市"},{"id":"330400","name":"嘉兴市"},{"id":"330500","name":"湖州市"},{"id":"330600","name":"绍兴市"},{"id":"330700","name":"金华市"},{"id":"330800","name":"衢州市"},{"id":"330900","name":"舟山市"},{"id":"331000","name":"台州市"},{"id":"331100","name":"丽水市"}],"name":"浙江省"},{"id":"340000","children":[{"id":"340100","name":"合肥市"},{"id":"340200","name":"芜湖市"},{"id":"340300","name":"蚌埠市"},{"id":"340400","name":"淮南市"},{"id":"340500","name":"马鞍山市"},{"id":"340600","name":"淮北市"},{"id":"340700","name":"铜陵市"},{"id":"340800","name":"安庆市"},{"id":"341000","name":"黄山市"},{"id":"341100","name":"滁州市"},{"id":"341200","name":"阜阳市"},{"id":"341300","name":"宿州市"},{"id":"341500","name":"六安市"},{"id":"341600","name":"亳州市"},{"id":"341700","name":"池州市"},{"id":"341800","name":"宣城市"}],"name":"安徽省"},{"id":"350000","children":[{"id":"350100","name":"福州市"},{"id":"350200","name":"厦门市"},{"id":"350300","name":"莆田市"},{"id":"350400","name":"三明市"},{"id":"350500","name":"泉州市"},{"id":"350600","name":"漳州市"},{"id":"350700","name":"南平市"},{"id":"350800","name":"龙岩市"},{"id":"350900","name":"宁德市"}],"name":"福建省"},{"id":"360000","children":[{"id":"360100","name":"南昌市"},{"id":"360200","name":"景德镇市"},{"id":"360300","name":"萍乡市"},{"id":"360400","name":"九江市"},{"id":"360500","name":"新余市"},{"id":"360600","name":"鹰潭市"},{"id":"360700","name":"赣州市"},{"id":"360800","name":"吉安市"},{"id":"360900","name":"宜春市"},{"id":"361000","name":"抚州市"},{"id":"361100","name":"上饶市"}],"name":"江西省"},{"id":"370000","children":[{"id":"370100","name":"济南市"},{"id":"370200","name":"青岛市"},{"id":"370300","name":"淄博市"},{"id":"370400","name":"枣庄市"},{"id":"370500","name":"东营市"},{"id":"370600","name":"烟台市"},{"id":"370700","name":"潍坊市"},{"id":"370800","name":"济宁市"},{"id":"370900","name":"泰安市"},{"id":"371000","name":"威海市"},{"id":"371100","name":"日照市"},{"id":"371200","name":"莱芜市"},{"id":"371300","name":"临沂市"},{"id":"371400","name":"德州市"},{"id":"371500","name":"聊城市"},{"id":"371600","name":"滨州市"},{"id":"371700","name":"菏泽市"}],"name":"山东省"},{"id":"410000","children":[{"id":"410100","name":"郑州市"},{"id":"410200","name":"开封市"},{"id":"410300","name":"洛阳市"},{"id":"410400","name":"平顶山市"},{"id":"410500","name":"安阳市"},{"id":"410600","name":"鹤壁市"},{"id":"410700","name":"新乡市"},{"id":"410800","name":"焦作市"},{"id":"410900","name":"濮阳市"},{"id":"411000","name":"许昌市"},{"id":"411100","name":"漯河市"},{"id":"411200","name":"三门峡市"},{"id":"411300","name":"南阳市"},{"id":"411400","name":"商丘市"},{"id":"411500","name":"信阳市"},{"id":"411600","name":"周口市"},{"id":"411700","name":"驻马店市"},{"id":"419000","name":"省直辖县级行政区划"}],"name":"河南省"},{"id":"420000","children":[{"id":"420100","name":"武汉市"},{"id":"420200","name":"黄石市"},{"id":"420300","name":"十堰市"},{"id":"420500","name":"宜昌市"},{"id":"420600","name":"襄阳市"},{"id":"420700","name":"鄂州市"},{"id":"420800","name":"荆门市"},{"id":"420900","name":"孝感市"},{"id":"421000","name":"荆州市"},{"id":"421100","name":"黄冈市"},{"id":"421200","name":"咸宁市"},{"id":"421300","name":"随州市"},{"id":"422800","name":"恩施土家族苗族自治州"},{"id":"429000","name":"省直辖县级行政区划"}],"name":"湖北省"},{"id":"430000","children":[{"id":"430100","name":"长沙市"},{"id":"430200","name":"株洲市"},{"id":"430300","name":"湘潭市"},{"id":"430400","name":"衡阳市"},{"id":"430500","name":"邵阳市"},{"id":"430600","name":"岳阳市"},{"id":"430700","name":"常德市"},{"id":"430800","name":"张家界市"},{"id":"430900","name":"益阳市"},{"id":"431000","name":"郴州市"},{"id":"431100","name":"永州市"},{"id":"431200","name":"怀化市"},{"id":"431300","name":"娄底市"},{"id":"433100","name":"湘西土家族苗族自治州"}],"name":"湖南省"},{"id":"440000","children":[{"id":"440100","name":"广州市"},{"id":"440200","name":"韶关市"},{"id":"440300","name":"深圳市"},{"id":"440400","name":"珠海市"},{"id":"440500","name":"汕头市"},{"id":"440600","name":"佛山市"},{"id":"440700","name":"江门市"},{"id":"440800","name":"湛江市"},{"id":"440900","name":"茂名市"},{"id":"441200","name":"肇庆市"},{"id":"441300","name":"惠州市"},{"id":"441400","name":"梅州市"},{"id":"441500","name":"汕尾市"},{"id":"441600","name":"河源市"},{"id":"441700","name":"阳江市"},{"id":"441800","name":"清远市"},{"id":"441900","name":"东莞市"},{"id":"442000","name":"中山市"},{"id":"445100","name":"潮州市"},{"id":"445200","name":"揭阳市"},{"id":"445300","name":"云浮市"}],"name":"广东省"},{"id":"450000","children":[{"id":"450100","name":"南宁市"},{"id":"450200","name":"柳州市"},{"id":"450300","name":"桂林市"},{"id":"450400","name":"梧州市"},{"id":"450500","name":"北海市"},{"id":"450600","name":"防城港市"},{"id":"450700","name":"钦州市"},{"id":"450800","name":"贵港市"},{"id":"450900","name":"玉林市"},{"id":"451000","name":"百色市"},{"id":"451100","name":"贺州市"},{"id":"451200","name":"河池市"},{"id":"451300","name":"来宾市"},{"id":"451400","name":"崇左市"}],"name":"广西壮族自治区"},{"id":"460000","children":[{"id":"460100","name":"海口市"},{"id":"460200","name":"三亚市"},{"id":"460300","name":"三沙市"},{"id":"469000","name":"省直辖县级行政区划"}],"name":"海南省"},{"id":"500000","children":[{"id":"500100","name":"重庆市"}],"name":"重庆市"},{"id":"510000","children":[{"id":"510100","name":"成都市"},{"id":"510300","name":"自贡市"},{"id":"510400","name":"攀枝花市"},{"id":"510500","name":"泸州市"},{"id":"510600","name":"德阳市"},{"id":"510700","name":"绵阳市"},{"id":"510800","name":"广元市"},{"id":"510900","name":"遂宁市"},{"id":"511000","name":"内江市"},{"id":"511100","name":"乐山市"},{"id":"511300","name":"南充市"},{"id":"511400","name":"眉山市"},{"id":"511500","name":"宜宾市"},{"id":"511600","name":"广安市"},{"id":"511700","name":"达州市"},{"id":"511800","name":"雅安市"},{"id":"511900","name":"巴中市"},{"id":"512000","name":"资阳市"},{"id":"513200","name":"阿坝藏族羌族自治州"},{"id":"513300","name":"甘孜藏族自治州"},{"id":"513400","name":"凉山彝族自治州"}],"name":"四川省"},{"id":"520000","children":[{"id":"520100","name":"贵阳市"},{"id":"520200","name":"六盘水市"},{"id":"520300","name":"遵义市"},{"id":"520400","name":"安顺市"},{"id":"520500","name":"毕节市"},{"id":"520600","name":"铜仁市"},{"id":"522300","name":"黔西南布依族苗族自治州"},{"id":"522600","name":"黔东南苗族侗族自治州"},{"id":"522700","name":"黔南布依族苗族自治州"}],"name":"贵州省"},{"id":"530000","children":[{"id":"530100","name":"昆明市"},{"id":"530300","name":"曲靖市"},{"id":"530400","name":"玉溪市"},{"id":"530500","name":"保山市"},{"id":"530600","name":"昭通市"},{"id":"530700","name":"丽江市"},{"id":"530800","name":"普洱市"},{"id":"530900","name":"临沧市"},{"id":"532300","name":"楚雄彝族自治州"},{"id":"532500","name":"红河哈尼族彝族自治州"},{"id":"532600","name":"文山壮族苗族自治州"},{"id":"532800","name":"西双版纳傣族自治州"},{"id":"532900","name":"大理白族自治州"},{"id":"533100","name":"德宏傣族景颇族自治州"},{"id":"533300","name":"怒江傈僳族自治州"},{"id":"533400","name":"迪庆藏族自治州"}],"name":"云南省"},{"id":"540000","children":[{"id":"540100","name":"拉萨市"},{"id":"540200","name":"日喀则市"},{"id":"540300","name":"昌都市"},{"id":"542200","name":"山南地区"},{"id":"542400","name":"那曲地区"},{"id":"542500","name":"阿里地区"},{"id":"542600","name":"林芝地区"}],"name":"西藏自治区"},{"id":"610000","children":[{"id":"610100","name":"西安市"},{"id":"610200","name":"铜川市"},{"id":"610300","name":"宝鸡市"},{"id":"610400","name":"咸阳市"},{"id":"610500","name":"渭南市"},{"id":"610600","name":"延安市"},{"id":"610700","name":"汉中市"},{"id":"610800","name":"榆林市"},{"id":"610900","name":"安康市"},{"id":"611000","name":"商洛市"}],"name":"陕西省"},{"id":"620000","children":[{"id":"620100","name":"兰州市"},{"id":"620200","name":"嘉峪关市"},{"id":"620300","name":"金昌市"},{"id":"620400","name":"白银市"},{"id":"620500","name":"天水市"},{"id":"620600","name":"武威市"},{"id":"620700","name":"张掖市"},{"id":"620800","name":"平凉市"},{"id":"620900","name":"酒泉市"},{"id":"621000","name":"庆阳市"},{"id":"621100","name":"定西市"},{"id":"621200","name":"陇南市"},{"id":"622900","name":"临夏回族自治州"},{"id":"623000","name":"甘南藏族自治州"}],"name":"甘肃省"},{"id":"630000","children":[{"id":"630100","name":"西宁市"},{"id":"630200","name":"海东市"},{"id":"632200","name":"海北藏族自治州"},{"id":"632300","name":"黄南藏族自治州"},{"id":"632500","name":"海南藏族自治州"},{"id":"632600","name":"果洛藏族自治州"},{"id":"632700","name":"玉树藏族自治州"},{"id":"632800","name":"海西蒙古族藏族自治州"}],"name":"青海省"},{"id":"640000","children":[{"id":"640100","name":"银川市"},{"id":"640200","name":"石嘴山市"},{"id":"640300","name":"吴忠市"},{"id":"640400","name":"固原市"},{"id":"640500","name":"中卫市"}],"name":"宁夏回族自治区"},{"id":"650000","children":[{"id":"650100","name":"乌鲁木齐市"},{"id":"650200","name":"克拉玛依市"},{"id":"652100","name":"吐鲁番地区"},{"id":"652200","name":"哈密地区"},{"id":"652300","name":"昌吉回族自治州"},{"id":"652700","name":"博尔塔拉蒙古自治州"},{"id":"652800","name":"巴音郭楞蒙古自治州"},{"id":"652900","name":"阿克苏地区"},{"id":"653000","name":"克孜勒苏柯尔克孜自治州"},{"id":"653100","name":"喀什地区"},{"id":"653200","name":"和田地区"},{"id":"654000","name":"伊犁哈萨克自治州"},{"id":"659000","name":"自治区直辖县级行政区划"}],"name":"新疆维吾尔自治区"},{"id":"710000","children":[{"id":"710100","name":"台北市"},{"id":"710200","name":"高雄市"},{"id":"710300","name":"基隆市"},{"id":"710400","name":"台中市"},{"id":"710500","name":"台南市"},{"id":"710600","name":"新竹市"},{"id":"710700","name":"嘉义市"},{"id":"710800","name":"新北市"},{"id":"712200","name":"宜兰县"},{"id":"712300","name":"桃园县"},{"id":"712400","name":"新竹县"},{"id":"712500","name":"苗栗县"},{"id":"712700","name":"彰化县"},{"id":"712800","name":"南投县"},{"id":"712900","name":"云林县"},{"id":"713000","name":"嘉义县"},{"id":"713300","name":"屏东县"},{"id":"713400","name":"台东县"},{"id":"713500","name":"花莲县"},{"id":"713600","name":"澎湖县"}],"name":"台湾省"},{"id":"810000","children":[{"id":"810100","name":"香港岛"},{"id":"810200","name":"九龙"},{"id":"810300","name":"新界"}],"name":"香港特别行政区"},{"id":"820000","children":[{"id":"820100","name":"澳门半岛"},{"id":"820200","name":"氹仔岛"},{"id":"820300","name":"路环岛"}],"name":"澳门特别行政区"},{"id":"990000","name":"海外"}]

// JS执行

function GetRegionPlug() {
    $(".test-div").append(
        $("<div/>", {
            "class": "place-div"
        }).append(
            $("<div/>", {}).append(
                $("<div/>", {
                    "class": "checkbtn"
                }).append(
                        $("<a/>", {
                        "class": "allcheck",
                        "text": "全选",
                        "data-switch":"true",
                        // "click": function () {
                        //     $(".place").find("input").prop("checked", true);
                        //     ShowTipNum();
                        //     // $(this).attr("data-switch","false");
                        //     $(this).off("click");
                        //     $(".clearCheck").click(
                        //         function () {
                        //              $(".place").find("input").prop("checked", false);
                        //              $(".ratio").html("");
                        //         }
                        //     )
                        // }
                    })
                ).append(
                    $("<a/>", {
                        "class": "clearCheck",
                        "text": "清空",
                        // "click": function () {
                        //     $(".place").find("input").prop("checked", false);
                        //     $(".ratio").html("");
                        // }
                    })
                )
            ).append(
                $("<div/>", {
                    "class": "placegroup"
                }).append(
                    GetPlace(datas)
                )
            )
        )
    )
}

function GetPlace(datas) {
    // console.log(datas);
    return datas.map(function (item) {
        // console.log(item);
        return $("<div/>", {
            "class": "place clearfloat"
        }).append(
            $("<div/>", {
                "class": "bigplace"
            }).append(
                $("<div/>", {}).append(
                    $("<label/>", {
                        "text": item.name
                    }).append(
                        $("<input/>", {
                            // "id":item.id,
                            "type": "checkbox",
                            "class": "bigarea",
                            "data-name": item.name,
                            "data-id": item.id,
                            "click": function () {
                                var bool = $(this).prop("checked");
                                var single = $(this).parents(".bigplace").next().find("input");
                                var ee = $(this).parents(".bigplace").next().find(".place-tooltips");
                                single.prop("checked", bool);
                                if (single.prop("checked")) {
                                    ee.each(function (index, a) {
                                        var num = $(this).find(".citys").find("input").length;
                                        $(this).find(".ratio").html("(" + num + "/" + num + ")");
                                    })
                                } else {
                                    ee.each(function (index, a) {
                                        var num = $(this).find(".citys").find("input").length;
                                        $(this).find(".ratio").html("");
                                    })
                                }
                            }
                        })
                    )
                )
            )
        ).append(
            function () {
                if (item.children) {
                    return GetSmallPlace(item.children)
                }
            }()
        )
    })
}
function GetSmallPlace(datas) {
    return $("<div/>", {
        "class": "smallplace clearfloat"
    }).append(
        datas.map(function (item) {
            return $("<div/>", {
                "class": "place-tooltips"
            }).append(
                $("<label/>", {
                    "text": item.name
                }).append(
                    $("<input/>", {
                        // "id":item.id,
                        "type": "checkbox",
                        "class": "bigcity",
                        "data-name": item.name,
                        "data-id": item.id,
                        "click": function () {
                            var small = $(this).parent().next(".citys").find("input");
                            var smalllength = small.length;
                            var ee = $(this).parents(".smallplace").find(".ratio");
                            if ($(this).prop("checked")) {
                                small.prop("checked", true);
                                $(this).parents(".place-tooltips").find(".ratio").html("(" + smalllength + "/" + smalllength + ")");
                                $(this).parents(".smallplace").prev().find(".bigarea").prop("checked", true);
                            } else {
                                small.prop("checked", false);
                                $(this).parents(".place-tooltips").find(".ratio").html("");
                                ClearArea($(this).parents(".smallplace"), $(this).parents(".smallplace").prev().find(".bigarea"));
                            };
                        }
                    })
                ).append(
                    function () {
                        if (item.children) {
                            return $("<span/>", {
                                "class": "ratio"
                            })
                        }
                    }
                )
            ).append(
                function () {
                    if (item.children) {
                        return $("<div/>", {
                            "class": "citys"
                        }).append(
                            $("<i/>", {
                                "class": "jt"
                            }).append($("<i/>", {}))
                        ).append(
                            GetSmallCitys(item.children)
                        )
                    }
                }

            )
        })
    )
}

function GetSmallCitys(datas) {
    return $("<div/>", {
        "class": "row-div clearfloat"
    }).append(
        datas.map(function (item) {
            return $("<p/>", {}).append(
                $("<label/>", {}).append(
                    $("<input/>", {
                        // "id":item.id,
                        "type": "checkbox",
                        "class": "city",
                        "click": function () {
                            var tf = $(this).parents(".citys").find("input:checked").length;
                            var alltf = $(this).parents(".citys").find("input").length;
                            if (tf > 0) {
                                $(this).parents(".place-tooltips").find(".bigcity").prop("checked", true);
                                $(this).parents(".place-tooltips").find(".ratio").html("(" + tf + "/" + alltf + ")");
                                $(this).parents(".smallplace").prev().find(".bigarea").prop("checked", true);
                            } else if (tf == 0) {
                                $(this).parents(".place-tooltips").find(".bigcity").prop("checked", false);
                                $(this).parents(".place-tooltips").find(".ratio").html("");
                                ClearArea($(this).parents(".smallplace"), $(this).parents(".smallplace").prev().find(".bigarea"));
                            }
                        }
                    })
                ).append(
                    $("<span/>", {
                        "text": item.name
                    })
                )
            )
        })
    )
}


//控制提示个数的显示
function ShowTipNum() {
    var n = $(".place-div").find(".place");
    n.each(function (index, a) {
        var m = $(this).find(".place-tooltips");
        m.each(function (index, a) {
            var u = $(this).find(".citys").find(".city").length;
            var uu = $(this).find(".citys").find(".city:checked").length;
            if (uu != 0) {
                $(this).find(".ratio").html("(" + uu + "/" + u + ")");
                $(this).find(".bigcity").prop("checked", true);
            } else {
                $(this).find(".ratio").html("");
            }

        })

    })
}
//省市区全部取消选择时华北东北等取消选择
function ClearArea(place, area) {//参数area为包含省级input的父级div
    var checked = place.find("input:checked").length;
    if (checked == 0) {
        area.prop("checked", false);
    }
}

//获取已选中的数据
function GetChecked() {
    var Checked = [];//先清空数组
    var checkedId=[];
    var n = $(".place-div").find(".place");
    n.each(function (index, a) {
        var m = $(this).find(".smallplace");
        m.each(function (index, a) {
            var p = $(this).find(".bigcity");
            p.each(function (index, a) {
                if ($(this).prop("checked")) {
                    if ($(this).parents(".place-tooltips").find(".citys").length == 0) {
                        //判断它没有下级地区的时候，将id放入数组
                        //console.log($(this).attr("id"));此时能获取到已选中的省市级id
                        Checked.push($(this).attr("data-name"));
                        checkedId.push($(this).attr("data-id"));
                    }
                }
                var s = $(this).parents(".place-tooltips").find(".city");
                s.each(function (index, a) {
                    if ($(this).prop("checked")) {
                        Checked.push($(this).attr("data-name"));
                        checkedId.push($(this).attr("data-id"));
                        //console.log($(this).attr("id"));//此时能获取到已选中的县区级id
                    }
                })
            })
        })
    })
    return  {area:Checked, areaCode:checkedId};
}

//将选中复选框禁用
function banCheck() {
    var n = $(".place-div").find(".place");
    n.each(function (index, a) {
        var m = $(this).find(".smallplace");
        var c= $(this).find(".bigplace");
        m.each(function (index, a) {
            var p = $(this).find(".bigcity");
            p.each(function (index, a) {
                if ($(this).prop("checked")) {
                        $(this).removeAttr("checked");//取消选中
                        $(this).attr("disabled", true);
                }
                // var s = $(this).parents(".place-tooltips").find(".city");
                // s.each(function (index, a) {
                //     if ($(this).prop("checked")) {
                //         $(this).removeAttr("checked");//取消选中
                //         $(this).attr("disabled", true);
                //     }
                // })
            })
        })

        c.each(function (index, a) {
            var p = $(this).find(".bigarea");
            p.each(function (index, a) {
                if ($(this).prop("checked")) {
                    $(this).removeAttr("checked");//取消选中
                   $(this).attr("disabled", true);
                }
            })
        })

    })

}

//将复选框解除禁用
function offCheck(obj) {
    var arrArea = obj.split(",");
    console.log(arrArea);
    var n = $(".place-div").find(".place");
    n.each(function (index, a) {
        var m = $(this).find(".smallplace");
        var c= $(this).find(".bigplace");
        m.each(function (index, a) {
            var p = $(this).find(".bigcity");
            p.each(function (index, a) {
                for(var i=0; i<arrArea.length; i++){
                    if (( $(this).attr("data-name")).indexOf(arrArea[i]) != -1 && arrArea[i] !=="" ) {
                         $(this).prop("checked",true)
                         $(this).removeAttr('disabled');
                    }
                }

                // var s = $(this).parents(".place-tooltips").find(".city");
                // s.each(function (index, a) {
                //     for(var i=0; i<arrArea.length; i++){
                //         if (( $(this).attr("data-name")).indexOf(arrArea[i]) != -1 && arrArea[i] !=="" ) {
                //              $(this).prop("checked",true)
                //              $(this).removeAttr('disabled');
                //         }
                //     }
                // })
            })
        })

        c.each(function (index, a) {
            var p = $(this).find(".bigarea");
            p.each(function (index, a) {
                for(var i=0; i<arrArea.length; i++){
                    if (($(this).attr("data-name")).indexOf(arrArea[i]) != -1 && arrArea[i] !=="" ) {
                        $(this).prop("checked",true);
                        $(this).removeAttr('disabled');
                    }
                }
            })
        })

    })
}

//根据从后台获取的已选中的id来显示
function SetChecked(param) {
    $.each(param, function (index, value) {
        $("#" + value).trigger("click");
    })
}

// 自定义JS
$(".test-div").on('mouseover', '.place', function () {
    // console.log($(this).children(".bigplace").find(".bigarea").attr("data-name"));
    $(this).addClass("place-active");
    $(this).children(".smallplace").show();
})
$(".test-div").on('mouseout', '.place', function () {
    $(this).removeClass("place-active");
    $(".smallplace").hide();
})


