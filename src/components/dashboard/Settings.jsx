import React, {useRef, useState} from 'react';
import {useSelector} from "react-redux";
import {FaMobile, FaUser} from "react-icons/fa6";
import {RxAvatar} from "react-icons/rx";
import {checkFileSize, errorMsg, getBase64, isEmpty} from "../../utility/formHelper.js";
import {CgDetailsMore} from "react-icons/cg";
import {updateUserDetailsRequest, userInfoRequest} from "../../apiRequest/apiRequest.js";

const Settings = () => {

    const userDetails = useSelector((state)=>state.user.info);

    let userImgRef,userImgView=useRef();

    let [formData,setFormData] = useState({
        mobile:"",fName:"",lName:""
    });

    const previewImg = async() => {
        let image = userImgRef.files[0];

        getBase64(image).then((result)=>{
            userImgView.src = result ;
        })
    }

   const inputOnChange =(key,value)=>{
        setFormData((formData)=>({
            ...formData,
            [key]:value
        }))
   }

    const onUpdateDetails = async () =>{
        let imageSize = userImgRef.files[0].size;

        formData.photo = userImgView.src;

        if(!checkFileSize(imageSize)){
            errorMsg("Max size can be 100KB")
        }
        else if(isEmpty(formData.mobile)){
            errorMsg("Provide a valid number!")
        }
        else if(isEmpty(formData.fName)){
            errorMsg("First name can't be empty!")
        }
        else if(isEmpty(formData.lName)){
            errorMsg("Last name can't be empty!")
        }
        else{
           let res = await updateUserDetailsRequest(formData);
           if(res === true){
               await userInfoRequest();
               formData.fName =""
               formData.lName = ""
               formData.mobile = ""
           }
        }
    }

    return (
        <main>
            <h2 className={'text-xl font-semibold'}>Settings</h2>
            <div className={"divider"}></div>

            <div className={"flex flex-col gap-5"}>

                <div className="flex flex-col gap-5 mb-8 items-start w-[50%]  justify-center">
                    <div className={"flex items-center gap-2 text-gray-600"}>
                        <h2 className={"text-3xl "}><RxAvatar/></h2>
                        <span className={"text-xl font-semibold"}>Change avatar</span>
                    </div>
                    <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden relative">
                        <img
                            src={userDetails['photo']}
                            alt="Selected"
                            className="w-full h-full object-cover"
                            ref={(input) => userImgView = input}
                        />

                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                            <span className="text-sm">Upload Image</span>
                        </div>

                    </div>
                    <input type="file" onChange={previewImg}
                           ref={(input) => userImgRef = input}
                           accept="image/*" className="mt-4"/>
                </div>

                <div className={"flex items-center gap-2"}>
                    <span className={"text-gray-600 text-3xl"}><CgDetailsMore/></span>
                    <h3 className={'text-xl font-semibold  text-gray-600'}>Change details</h3>
                </div>
                <p><span className={"text-primary text-[16px]"}>Email: </span>{userDetails['email']} </p>

                <div>
                    <div>
                        <div className={"flex mb-1 text-gray-600 text-xl items-center gap-2"}>
                            <span><FaUser/></span>
                            <h2 className={"font-semibold"}>{userDetails['fName']}</h2>
                        </div>
                        <span className={"text-accent"}>First name</span>
                    </div>
                    <input type="text" placeholder="Update first name"
                           onChange={(e)=>inputOnChange("fName",e.target.value)}
                           className="input input-bordered input-accent w-full mt-1 max-w-xs"/>
                </div>

                <div>
                    <div>
                        <div className={"flex mb-1 text-gray-600 text-xl items-center gap-2"}>
                            <span><FaUser/></span>
                            <h2 className={"font-semibold"}>{userDetails['lName']}</h2>
                        </div>
                        <span className={"text-accent"}>Last name</span>
                    </div>
                    <input type="text" placeholder="Update last name"
                           onChange={(e)=>inputOnChange("lName",e.target.value)}
                           className="input input-bordered input-accent w-full mt-1 max-w-xs"/>
                </div>

                <div>
                    <div>
                        <div className={"flex mb-1 text-gray-600 text-xl items-center gap-2"}>
                            <span><FaMobile/></span>
                            <h2 className={"font-semibold"}>{userDetails['mobile']}</h2>
                        </div>
                        <span className={"text-accent"}>Mobile</span>
                    </div>
                    <input type="text" placeholder="Update mobile number"
                           onChange={(e)=>inputOnChange("mobile",e.target.value)}
                           className="input input-bordered input-accent w-full mt-1 max-w-xs"/>
                </div>

                <div>
                    <button onClick={onUpdateDetails} className={"btn btn-accent btn-wide mt-5"}>Update Details</button>
                </div>

            </div>


        </main>
    );
};

export default Settings;