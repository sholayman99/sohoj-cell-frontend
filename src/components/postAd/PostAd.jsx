import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {getBase64} from "../../utility/formHelper.js";
import {postAdRequest} from "../../apiRequest/apiRequest.js";


const PostAd = () => {

    const categoryList = useSelector((state)=>state.category.categoryList);
    const districtList = useSelector((state)=>state.category.districtList);
    const divisionList = useSelector((state)=>state.category.divisionList);
    const userInfo = useSelector((state)=>state.user.info);


    const [isChecked, setIsChecked] = useState(false);
    let [postData,setPostData] = useState({
        productName:"",price:"",categoryID:"",districtID:"",divisionID:"",condition:"Used",authenticity:"Original",features:"",brandName:"",model:"",
        description:"",negotiable:"No",edition:"" })

    const [selectedImage, setSelectedImage] = useState("");

    const inputOnchange = (key,value)=>{
        setPostData((data)=>({
            ...data,
            [key]:value
        }))
    }

    // Function to handle checkbox change
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        getBase64(file).then((result)=>{
            setSelectedImage(result);
        })

    };

const navigate = useNavigate()

    const onPost = async ()=>{
       postData.userEmail = userInfo['email'];
       postData.mobile = userInfo['mobile']
       let res = await postAdRequest(postData,selectedImage);
       if(res === true){
           navigate('/dashboard/my-ad');
       }


    }

    return (
        <main className={"bg-base-200 lg:p-20 mx-auto"}>
            <div className={"bg-base-100 p-4 rounded-md"}>
                <section className={"flex items-start justify-between "}>
                    <h2 className={"text-2xl font-semibold"}>Fill in the details</h2>
                    <div className={"grid grid-cols-3 gap-10 w-full max-w-3xl"}>
                        <select onChange={(e)=>inputOnchange("categoryID",e.target.value)} className="select select-info w-full max-w-xs">
                            <option disabled selected>Select Category</option>
                            {
                                categoryList.map((item, i) => {
                                    return (
                                        <option value={item['_id']} key={i}>{item['categoryName']}</option>
                                    )
                                })
                            }
                        </select>
                        <select onChange={(e)=>inputOnchange("districtID",e.target.value)} className="select select-info w-full max-w-xs">
                            <option disabled selected>Select District</option>
                            {
                                districtList.map((item, i) => {
                                    return (
                                        <option  value={item['_id']} key={i}>{item['district']}</option>
                                    )
                                })
                            }
                        </select>
                        <select onChange={(e)=>inputOnchange("divisionID",e.target.value)} className="select select-info w-full max-w-xs">
                            <option disabled selected>Select Division</option>
                            {
                                divisionList.map((item, i) => {
                                    return (
                                        <option  value={item['_id']} key={i}>{item['division']}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </section>
                <div className={"divider"}></div>
                <p className={"text-end text-accent mb-5"}><Link to={"/"}>See our posting rules</Link></p>
                <section className={"flex text-gray-600 justify-center items-center"}>
                    <div className={"grid grid-cols-1 gap-10"}>
                        {/*productName*/}
                        <div>
                            <span>Product Name</span>
                            <div className={"w-full grid grid-cols-1 mt-2"}>
                                <input onChange={(e)=>inputOnchange("productName",e.target.value)} type="text" placeholder="Write your product name"
                                       className="input input-bordered input-accent w-full"/>
                            </div>
                        </div>
                        {/*price*/}
                        <div>
                            <span>Price(Tk)</span>
                            <div className={"w-full grid grid-cols-1 mt-2"}>
                                <input onChange={(e)=>inputOnchange("price",e.target.value)} type="number" placeholder="Choose price"
                                       className="input input-bordered input-accent w-full"
                                />
                            </div>
                        </div>
                        {/*condition*/}
                        <div>
                            <span>Condition</span>
                            <div className={"w-full grid grid-cols-2 gap-[20rem]  mt-2"}>
                                <label className={"inline-flex items-center gap-1"}>
                                    <input type="radio" name="Used" className="radio radio-accent" value={"Used"}
                                           onChange={(e)=>inputOnchange("condition",e.target.value)}
                                           checked={postData.condition === "Used"}/>
                                    <span>Used</span>
                                </label>
                                <label className={"inline-flex items-center gap-1"}>
                                    <input type="radio" name="New" className="radio radio-accent" value={"New"}
                                           onChange={(e)=>inputOnchange("condition",e.target.value)}
                                           checked={postData.condition === "New"}/>
                                    <span>New</span>
                                </label>
                            </div>
                        </div>
                        {/*authenticity*/}
                        <div>
                            <span>Authenticity</span>
                            <div className={"w-full grid grid-cols-2 gap-[20rem]  mt-2"}>
                                <label className={"inline-flex items-center gap-1"}>
                                    <input type="radio" name="Original" className="radio radio-accent"
                                           checked={postData.authenticity === "Original"} onChange={(e)=>inputOnchange("authenticity",e.target.value)}
                                           value={"Original"}/>
                                    <span>Original</span>
                                </label>
                                <label className={"inline-flex items-center gap-1"}>
                                    <input type="radio" name="Refurbished" className="radio radio-accent"
                                           checked={postData.authenticity === "Refurbished"} onChange={(e)=>inputOnchange("authenticity",e.target.value)}
                                           value={"Refurbished"}/>
                                    <span>Refurbished</span>
                                </label>
                            </div>
                        </div>
                        {/*brandName*/}
                        <div>
                            <span>Brand</span>
                            <div className={"w-full grid grid-cols-1 mt-2"}>
                                <input type="text" placeholder="Write brand name" onChange={(e)=>inputOnchange("brandName",e.target.value)}
                                       className="input input-bordered input-accent w-full"/>
                            </div>
                        </div>

                        {/*feature*/}

                        <div>
                            <span>Features</span>
                            <div className={"w-full grid grid-cols-1 mt-2"}>
                                <input type="text" placeholder="Write product features"
                                       onChange={(e)=>inputOnchange("features",e.target.value)}   className="input input-bordered input-accent w-full"
                                />
                            </div>
                        </div>
                        {/*model*/}
                        <div>
                            <span>Model</span>
                            <div className={"w-full grid grid-cols-1 mt-2"}>
                                <input type="text" placeholder="Write model name"
                                       onChange={(e)=>inputOnchange("model",e.target.value)}   className="input input-bordered input-accent w-full"
                                />
                            </div>
                        </div>

                        {/*edition*/}
                        <div>
                            <span>Edition(optional)</span>
                            <div className={"w-full grid grid-cols-1 mt-2"}>
                                <input type="text" placeholder="Write edition name"
                                       onChange={(e)=>inputOnchange("edition",e.target.value)}   className="input input-bordered input-accent w-full"/>
                            </div>
                        </div>
                        <div>
                            <span>Description (Maximum letter 2000) </span>
                            <div className={"w-full grid grid-cols-1 mt-2"}>
                                <textarea className="textarea textarea-accent" maxLength={2000}
                                          onChange={(e)=>inputOnchange("description",e.target.value)}   placeholder="Write product description"
                                ></textarea>
                            </div>
                        </div>
                        {/*edition*/}
                        <div>
                            <span>Negotiable</span>
                            <div className={"w-full grid grid-cols-2 gap-[20rem]  mt-2"}>
                                <label className={"inline-flex items-center gap-1"}>
                                    <input type="radio" name="No" className="radio radio-accent" value={"No"}
                                           onChange={(e) => inputOnchange("negotiable", e.target.value)}
                                           checked={postData.negotiable === "No"}/>
                                    <span>No</span>
                                </label>
                                <label className={"inline-flex items-center gap-1"}>
                                    <input type="radio" name="Yes" className="radio radio-accent" value={"Yes"}
                                           onChange={(e) => inputOnchange("negotiable", e.target.value)}
                                           checked={postData.negotiable === "Yes"}/>
                                    <span>Yes</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </section>
                <div className={"divider"}></div>
                <section className="flex flex-col items-center justify-center">

                    {/*image*/}
                    <div className="flex flex-col gap-5 items-start w-[50%]  justify-center">
                        <h2 className={"text-xl font-semibold"}>Add image<span
                            className={"text-error text-sm font-normal"}>(Max size can be 200px)</span></h2>
                        <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden relative">
                            {selectedImage ? (
                                <img
                                    src={selectedImage}
                                    alt="Selected"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-500">
                                    <span className="text-sm">Upload Image</span>
                                </div>
                            )}
                        </div>
                        <input type="file" accept="image/*" onChange={handleImageChange} className="mt-4"/>
                    </div>
                </section>
                <div className={"divider"}></div>
                <section className="flex flex-col items-center justify-center">

                    {/*edition*/}
                    <div className="flex flex-col gap-10 items-start w-[50%]  justify-center">
                        <h2 className={"text-xl font-semibold"}>Contact details </h2>
                        <div>
                            <p className={"text-gray-600"}>Name</p>
                            <h4 className={"text-[16px]"}>{userInfo['fName']} {userInfo['lName']}</h4>
                        </div>
                        <div>
                            <p className={"text-gray-600"}>Email</p>
                            <h4 className={"text-[16px]"}>{userInfo['email']}</h4>
                        </div>
                        <div>
                            <p className={"text-gray-600"}>Mobile</p>
                            <h4 className={"text-[16px]"}>{userInfo['mobile']}</h4>
                        </div>
                        <div className={"flex items-center gap-2"}>
                            <input type="checkbox" checked={isChecked}
                                   onChange={handleCheckboxChange} className="checkbox checkbox-accent"/>
                            <p>I have read and accept the <span className={"text-accent"}>Terms and Conditions</span>
                            </p>
                        </div>
                        <div>
                            <button onClick={onPost} disabled={!isChecked} className={"btn btn-primary text-base-100 btn-wide"}>Post ad</button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default PostAd;