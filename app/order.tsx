"use client"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function Order() {
const [title,setTitle]=useState<string|boolean>('');
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => clickHandler(data);



const clickHandler = (data) => {
 const requestData = {
    records: [
      {
        fields: {
          A:data.title,
          B: data.pan,
		  C:data.paper,
						K:"신규"
        }
      }
    ]
  };
const url ="/api"
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(requestData),
};

fetch(url, requestOptions)
  .then(response => response.json())
  .then(data => {
    // Handle the response data
  })
  .catch(error => {
    // Handle any errors
  });
  };
	return (
		<>
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">의뢰하기</h1>
					<p className="py-6">데이터 전달 체크 </p>
				</div>


 <form onSubmit={handleSubmit(onSubmit)}>

				<div className="card flex-shrink-0 w-[1024 px] max-w-3xl shadow-2xl bg-base-100">
					<div className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">제목</span>
							</label>
							<input type="text" placeholder="의뢰물" className="input input-bordered"  {...register("title")}/>
						</div>
						<label className="label">
							<span className="label-text">판형</span>
						</label>
						<select  className="select select-bordered w-full max-w-xs"  {...register("pan")}>
							<option value="210*297">210*297</option>
						</select>
						<label className="label">
							<span className="label-text">용지</span>
						</label>
						<select  className="select select-bordered w-full max-w-xs"  {...register("paper")}>
							<option value="스노우">스노우</option>
							<option value="백모">백모</option>
							<option value="'트레이싱">트레이싱</option>
						</select>



						<div>
							<label className="label">
								<span className="label-text">코팅</span>
							</label>
						  <label className="label cursor-pointer">
    <span className="label-text">코팅</span> 
    <input type="checkbox" className="checkbox" />
  </label>
						</div>

						<div className="form-control mt-6">
							<button className="btn btn-primary" >문의하기</button>
						</div>
					</div>
				</div>
    </form>


			</div>
		</div>
     </>

	)
}




