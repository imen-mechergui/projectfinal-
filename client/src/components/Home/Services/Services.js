import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import './Services.css';
const Services = () => {
	const [serviceInfo, setServiceInfo] = useState([]);


	const [states, setState] = useState();
	
	

	useEffect(() => {
		fetch(
			'https://infinite-headland-81835.herokuapp.com/isAdmin?email=' 
		)
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
				if (result.length == 0) {
					setState(false);
				} else {
					setState(true);
				}
			});
	}, []);
	console.log(states);
	useEffect(() => {
		fetch('https://infinite-headland-81835.herokuapp.com/showService')
			.then((res) => res.json())
			.then((result) => setServiceInfo(result));
	}, []);
	return (
		<section className="services py-5">
			<div className="services-wrapper container text-center" id="hire">
				<h2 className=" py-5  my-5">
					Provide awesome <span>services</span>
				</h2>
				<div className="row ">
					{serviceInfo.length ? (
						serviceInfo.map((info) => (
							<div className="col-sm-12 col-md-6 col-lg-4 mt-4">
								{!states && (
									
										<div className="card card-service-custom">
											<div className="card-body ">
												<img
													src={`data:image/png;base64,${info.image.img}`}
													alt="service-img"
												/>
												<h4>{info.service}</h4>
												<p>{info.description}</p>
											</div>
										</div>
								
								)}
								{states && (
									<div className="card card-service-custom">
										<div className="card-body ">
											<img
												src={`data:image/png;base64,${info.image.img}`}
												alt="service-img"
											/>
											<h4>{info.service}</h4>
											<p>{info.description}</p>
										</div>
									</div>
								)}
							</div>
						))
					) : (
						<Spinner />
					)}
				</div>
			</div>
		</section>
	);
};

export default Services;