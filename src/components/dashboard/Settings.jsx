import React, {useRef, useState} from 'react';
import {useSelector} from "react-redux";
import {checkFileSize, errorMsg, getBase64, isPassword} from "../../utility/formHelper.js";
import {
    accountDeleteRequest,
    logoutRequest,
    userInfoRequest,
    userPasswordUpdateRequest,
    userPhotoUpdateRequest
} from "../../apiRequest/apiRequest.js";
import {FaEye, FaMobile, FaUser} from "react-icons/fa6";
import {FaEdit, FaEyeSlash} from "react-icons/fa";
import {userNameUpdateModal} from "../../utility/userNameUpdateModal.js";
import {userMobileUpdateModal} from "../../utility/userMobileUpdateModal.js";
import {successModal} from "../../utility/successModal.js";
import {accountDeleteAlert} from "../../utility/accountDeleteAlert.js";
import {removeSession} from "../../utility/sessionHelper.js";

const Settings = () => {


    const userDetails = useSelector((state)=>state.user.info);
    const [isDisable,setIsDisable] = useState(true);

    const toggleButton = () => {

        if(newPassRef.value === confirmPassRef.value)
        {
            setIsDisable(false)
        }
        else {
            setIsDisable(true)
        }

    }

    let userImgRef,userImgView,newPassRef,confirmPassRef=useRef();

    const previewImg = async() => {
        let image = userImgRef.files[0];

        getBase64(image).then((result)=>{
            userImgView.src = result ;
        })
    }

    const [passwordType, setPasswordType] = useState("password");


    const togglePassword =()=>{
        if(passwordType==="password")
        {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const updatePhoto = async ()=>{
        let imageSize = userImgRef.files[0].size;
        let photo = userImgView.src;
        if(checkFileSize(imageSize)){
           let res = await userPhotoUpdateRequest(photo);
           if(res === true){
               await userInfoRequest();
           }
        }
        else{
            errorMsg("Photo size must be less than 100KB or equal!")
        }

    }

    const updateFullName = async ()=>{
       let res = await  userNameUpdateModal();
       if(res === true){
           await userInfoRequest();
       }
    }

    const changePassword = async ()=>{
        let newPass = newPassRef.value
        let confirmPass = confirmPassRef.value
        if(!isPassword(newPass) || !isPassword(confirmPass)){
            errorMsg("Minimum 8 character")
        }
        else{
            if(newPass !== confirmPass){
                errorMsg("Password didn't match!")
            }
            else{
               let res = await userPasswordUpdateRequest(newPass);
               if(res === true){
                  await successModal();
                   newPassRef.value = ""
                   confirmPassRef.value = ""
               }
            }
        }
    }

    const updateMobile = async ()=>{
        let res = await  userMobileUpdateModal();
        if(res === true){
            await userInfoRequest();
        }
    }

    const onLogout = async ()=>{
        await logoutRequest();
    }

    const onDeleteAccount = async () => {

        let res = await accountDeleteAlert(userDetails['_id']);
        if(res === true){
            await accountDeleteRequest();
            await removeSession();
            errorMsg("Account Deleted!");
            window.location.href = "/registration";

        }

    }


    return (
        <main>
            <h2 className={'text-2xl font-medium'}>Settings</h2>
            <div className={"divider"}></div>


            <div className="flex flex-col gap-5 items-start w-[50%]  justify-center">
                <h2 className={"text-xl font-semibold"}>Upload Image<span
                    className={"text-error text-sm font-normal"}>(Max size can be 100KB)</span></h2>
                <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden relative">
                    <div className="avatar">
                        <div className="w-full rounded-full">
                            <img alt={""} src={userDetails['photo']} ref={(input) => userImgView = input}/>
                        </div>
                    </div>

                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                        <span className="text-sm">Upload Image</span>
                    </div>
                </div>
                <input onChange={previewImg}
                       ref={(input) => userImgRef = input}
                       type="file" accept="image/*" className="mt-4"/>

                <button onClick={updatePhoto} className={"btn btn-outline btn-accent"}>Update Photo</button>
            </div>

            <section className={"flex flex-col gap-6 mt-8 max-w-sm"}>
                <h2 className={"text-xl font-semibold"}>Contact and basic info</h2>
                <h4 className={"text-lg text-gray-700"}><span
                    className={"text-primary"}>Email: </span>{userDetails['email']}</h4>

                <div className={" flex items-center justify-between"}>
                    <div className={"flex gap-2 items-center"}>
                        <span className={"text-gray-600 text-2xl"}> <FaUser/> </span>
                        <div>
                            <h2 className={"text-lg"}> {userDetails['fullName']}</h2>
                            <span className={"text-gray-600"}>Full Name</span>
                        </div>
                    </div>
                    <div>
                        <button onClick={updateFullName} className={"text-2xl btn bg-base-200 btn-ghost rounded-full"}>
                            <FaEdit/></button>
                    </div>
                </div>

                <div className={" flex items-center justify-between"}>
                    <div className={"flex gap-2 items-center"}>
                        <span className={"text-gray-600 text-2xl"}> <FaMobile/> </span>
                        <div>
                            <h2 className={"text-lg"}> {userDetails['mobile']}</h2>
                            <span className={"text-gray-600"}>Mobile</span>
                        </div>
                    </div>
                    <div>
                        <button onClick={updateMobile} className={"text-2xl btn bg-base-200 btn-ghost rounded-full"}>
                            <FaEdit/></button>
                    </div>
                </div>
            </section>

            <section className={"flex flex-col gap-6 mt-8 max-w-sm"}>
                <h2 className={"text-xl font-semibold"}>Change password</h2>


                <div className={"form-control flex flex-col gap-3"}>
                    <div className="form-control relative">
                        <input type={passwordType} placeholder="New password"
                               ref={(input) => newPassRef = input}
                               className="input input-bordered input-accent max-w-full"
                               required/>
                        <div className="input-group-btn absolute right-2 top-2">
                            <button className="btn btn-ghost btn-sm"
                                    onClick={togglePassword}>
                                {passwordType === "password" ? <FaEyeSlash/> :
                                    <FaEye/>}
                            </button>
                        </div>
                    </div>
                    <div className="form-control ">
                        <input type={"password"} placeholder="Confirm password"
                               className="input input-bordered input-accent max-w-full"
                               onChange={toggleButton}
                               ref={(input) => confirmPassRef = input}
                               required/>
                    </div>
                    <button disabled={isDisable} onClick={changePassword} className="btn btn-accent max-w-[200px]">Change</button>
                </div>

                <div className={"flex flex-col mt-10 lg:flex-row md:flex-row items-center gap-3 max-w-[200px]"}>
                    <button onClick={onDeleteAccount}  className={"btn btn-error w-full  text-base-100"}>Delete account</button>
                    <button onClick={onLogout} className={"btn btn-primary w-full  text-base-100"}>Log out</button>
                </div>

            </section>

        </main>
    );
};

export default Settings;