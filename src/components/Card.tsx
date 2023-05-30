export default function Card() {

return (<>
	<div className="card w-96 bg-base-100 shadow-xl ">
                        <div className="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                            <a href="javascript:;" className="d-block">
                                <img src="/product/book_1.jpg" className="img-fluid border-radius-lg shadow"/>
                            </a>
                        </div>

                        <div className="card-body pt-3">
                            <div className="d-flex align-items-center">
                                <div>
                                    <a href="javascript:;" className="card-title h4 d-block text-darker font-weight-bolder mb-2">우리문화 바로 알기</a>
                                    <div className="d-flex align-items-center">
                                        <p className="card-description font-weight-bolder text-dark mb-4 text-left">
                                            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                                            99% <span className="text-sm font-weight-normal">스프링제본</span>
                                        </p>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="w-50 d-flex align-items-center">
                                    <i className="fa fa-truck text-sm mb-0" aria-hidden="true"></i>
                                    <h6 className="mb-5 mb-0 ms-2 text-right ">￦3,500</h6>
                                </div>
                                <div className="w-50 ms-auto text-end">
                                    <a  className="btn btn-outline-dark mb-0">문의하기</a>
                                </div>
                            </div>
                        </div>
						</div>
</>
)

}
