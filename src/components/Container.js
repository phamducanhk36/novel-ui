import React from 'react';
import './Container.css'

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return(
            <div className="container hot-story" id="intro-index">
                <div className="title-list">
                    <h2><a href="https://123truyen.vip/danh-sach/truyen-hot" title="Truyện hot">Truyện Đề Cử <span
                        className="icon-star"></span></a></h2>
                </div>
                <div className="index-intro">
                    <div className="item top-1" itemScope="" itemType="http://schema.org/Book">
                        <a href="https://123truyen.vip/van-co-than-de" itemProp="url" className="img-hover">
                            <img src="https://123truyen.vip/images/2019/07/van-co-than-de.jpeg" alt="Vạn Cổ Thần Đế"
                                 className="img-responsive" itemProp="image"/>
                                <span className="show-chapters"><span>21,116,709</span></span>
                                <div className="title"><h3 itemProp="name">Vạn Cổ Thần Đế</h3></div>
                                <span className="btn-view-book"><i className="iconfont-icon_book"></i></span>
                                <span className="item-mask-bg"></span>
                        </a>
                    </div>
                    <div className="item top-2" itemScope="" itemType="http://schema.org/Book">
                        <a href="https://123truyen.vip/vo-than-chua-te" itemProp="url" className="img-hover">
                            <img src="https://123truyen.vip/images/2019/07/vo-than-chua-te.jpeg" alt="Võ Thần Chúa Tể"
                                 className="img-responsive" itemProp="image"/>
                                <span className="show-chapters"><span>17,558,441</span></span>
                                <div className="title"><h3 itemProp="name">Võ Thần Chúa Tể</h3></div>
                                <span className="btn-view-book"><i className="iconfont-icon_book"></i></span>
                                <span className="item-mask-bg"></span>
                        </a>
                    </div>
                    <div className="item top-3" itemScope="" itemType="http://schema.org/Book">
                        <a href="https://123truyen.vip/vu-luyen-dien-phong" itemProp="url" className="img-hover">
                            <img src="https://123truyen.vip/images/2019/07/vu-luyen-dien-phong.jpeg"
                                 alt="Vũ Luyện Điên Phong" className="img-responsive" itemProp="image"/>
                                <span className="show-chapters"><span>10,172,017</span></span>
                                <div className="title"><h3 itemProp="name">Vũ Luyện Điên Phong</h3></div>
                                <span className="btn-view-book"><i className="iconfont-icon_book"></i></span>
                                <span className="item-mask-bg"></span>
                        </a>
                    </div>
                    <div className="item top-4" itemScope="" itemType="http://schema.org/Book">
                        <a href="https://123truyen.vip/tien-vo-de-ton" itemProp="url" className="img-hover">
                            <img src="https://123truyen.vip/images/2021/02/tien-vo-de-ton.jpeg" alt="Tiên Võ Đế Tôn"
                                 className="img-responsive" itemProp="image"/>
                                <span className="show-chapters"><span>8,256,256</span></span>
                                <div className="title"><h3 itemProp="name">Tiên Võ Đế Tôn</h3></div>
                                <span className="btn-view-book"><i className="iconfont-icon_book"></i></span>
                                <span className="item-mask-bg"></span>
                        </a>
                    </div>
                    <div className="item top-5" itemScope="" itemType="http://schema.org/Book">
                        <a href="https://123truyen.vip/vo-thuong-sat-than" itemProp="url" className="img-hover">
                            <img src="https://123truyen.vip/images/2020/07/vo-thuong-sat-than.jpeg"
                                 alt="Vô Thượng Sát Thần" className="img-responsive" itemProp="image"/>
                                <span className="show-chapters"><span>6,602,576</span></span>
                                <div className="title"><h3 itemProp="name">Vô Thượng Sát Thần</h3></div>
                                <span className="btn-view-book"><i className="iconfont-icon_book"></i></span>
                                <span className="item-mask-bg"></span>
                        </a>
                    </div>
                    <div className="item top-6" itemScope="" itemType="http://schema.org/Book">
                        <a href="https://123truyen.vip/de-ba" itemProp="url" className="img-hover">
                            <img src="https://123truyen.vip/images/2019/07/de-ba.jpeg" alt="Đế Bá"
                                 className="img-responsive" itemProp="image"/>
                                <span className="show-chapters"><span>6,578,288</span></span>
                                <div className="title"><h3 itemProp="name">Đế Bá</h3></div>
                                <span className="btn-view-book"><i className="iconfont-icon_book"></i></span>
                                <span className="item-mask-bg"></span>
                        </a>
                    </div>
                    <div className="item top-7" itemScope="" itemType="http://schema.org/Book">
                        <a href="https://123truyen.vip/vo-thuong-than-de" itemProp="url" className="img-hover">
                            <img src="https://123truyen.vip/images/2020/10/vo-thuong-than-de.jpeg"
                                 alt="Vô Thượng Thần Đế" className="img-responsive" itemProp="image"/>
                                <span className="show-chapters"><span>6,573,657</span></span>
                                <div className="title"><h3 itemProp="name">Vô Thượng Thần Đế</h3></div>
                                <span className="btn-view-book"><i className="iconfont-icon_book"></i></span>
                                <span className="item-mask-bg"></span>
                        </a>
                    </div>
                    <div className="item top-8" itemScope="" itemType="http://schema.org/Book">
                        <a href="https://123truyen.vip/than-dao-dan-ton" itemProp="url" className="img-hover">
                            <img src="https://123truyen.vip/images/2019/07/than-dao-dan-ton.jpeg" alt="Thần Đạo Đan Tôn"
                                 className="img-responsive" itemProp="image"/>
                                <span className="show-chapters"><span>5,808,936</span></span>
                                <div className="title"><h3 itemProp="name">Thần Đạo Đan Tôn</h3></div>
                                <span className="btn-view-book"><i className="iconfont-icon_book"></i></span>
                                <span className="item-mask-bg"></span>
                        </a>
                    </div>
                    <div className="item top-9" itemScope="" itemType="http://schema.org/Book">
                        <a href="https://123truyen.vip/than-de" itemProp="url" className="img-hover">
                            <img src="https://123truyen.vip/images/2020/03/than-de.jpeg" alt="Thần Đế"
                                 className="img-responsive" itemProp="image"/>
                                <span className="show-chapters"><span>5,412,287</span></span>
                                <div className="title"><h3 itemProp="name">Thần Đế</h3></div>
                                <span className="btn-view-book"><i className="iconfont-icon_book"></i></span>
                                <span className="item-mask-bg"></span>
                        </a>
                    </div>
                    <div className="item top-10" itemScope="" itemType="http://schema.org/Book">
                        <a href="https://123truyen.vip/tuyet-the-vu-than" itemProp="url" className="img-hover">
                            <img src="https://123truyen.vip/images/2019/07/tuyet-the-vu-than.jpeg"
                                 alt="Tuyệt Thế Vũ Thần" className="img-responsive" itemProp="image"/>
                                <span className="show-chapters"><span>4,865,479</span></span>
                                <div className="title"><h3 itemProp="name">Tuyệt Thế Vũ Thần</h3></div>
                                <span className="btn-view-book"><i className="iconfont-icon_book"></i></span>
                                <span className="item-mask-bg"></span>
                        </a>
                    </div>
                    <div className="item top-11" itemScope="" itemType="http://schema.org/Book">
                        <a href="https://123truyen.vip/long-vuong-truyen-thuyet" itemProp="url" className="img-hover">
                            <img src="https://123truyen.vip/images/2019/07/long-vuong-truyen-thuyet.jpeg"
                                 alt="Long Vương Truyền Thuyết" className="img-responsive" itemProp="image"/>
                                <span className="show-chapters"><span>4,836,344</span></span>
                                <div className="title"><h3 itemProp="name">Long Vương Truyền Thuyết</h3></div>
                                <span className="btn-view-book"><i className="iconfont-icon_book"></i></span>
                                <span className="item-mask-bg"></span>
                        </a>
                    </div>
                    <div className="item top-12" itemScope="" itemType="http://schema.org/Book">
                        <a href="https://123truyen.vip/choc-tuc-vo-yeu-mua-mot-tang-mot" itemProp="url"
                           className="img-hover">
                            <img src="https://123truyen.vip/images/2019/07/choc-tuc-vo-yeu-mua-mot-tang-mot.jpeg"
                                 alt="Chọc Tức Vợ Yêu - Mua Một Tặng Một" className="img-responsive" itemProp="image"/>
                                <span className="show-chapters"><span>4,793,132</span></span>
                                <div className="title"><h3 itemProp="name">Chọc Tức Vợ Yêu - Mua Một Tặng Một</h3></div>
                                <span className="btn-view-book"><i className="iconfont-icon_book"></i></span>
                                <span className="item-mask-bg"></span>
                        </a>
                    </div>
                    <div className="item top-13" itemScope="" itemType="http://schema.org/Book">
                        <a href="https://123truyen.vip/dau-la-dai-luc-iv-chung-cuc-dau-la" itemProp="url"
                           className="img-hover">
                            <img src="https://123truyen.vip/images/2020/11/dau-la-dai-luc-iv-chung-cuc-dau-la.jpeg"
                                 alt="Đấu La Đại Lục IV Chung Cực Đấu La" className="img-responsive" itemProp="image"/>
                                <span className="show-chapters"><span>4,488,657</span></span>
                                <div className="title"><h3 itemProp="name">Đấu La Đại Lục IV Chung Cực Đấu La</h3></div>
                                <span className="btn-view-book"><i className="iconfont-icon_book"></i></span>
                                <span className="item-mask-bg"></span>
                        </a>
                    </div>

                </div>
            </div>
        )
    }
}
export default Container;
