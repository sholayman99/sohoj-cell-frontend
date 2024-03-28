import React from 'react';

const Settings = () => {
    return (
        <main>
            <h2 className={'text-xl font-semibold'}>Settings</h2>
            <div className={"divider"}></div>

            <div className={"flex flex-col gap-5"}>
                <h3 className={'text-xl font-semibold text-gray-600'}>Change details</h3>
                <p><span className={"text-primary text-[16px]"}>Email:</span> </p>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Mobile:</span>
                    </div>
                    <input type="text" className="input input-bordered w-full max-w-xs"/>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">First Name:</span>
                    </div>
                    <input type={'text'} placeholder="First Name" className="input input-bordered w-full max-w-xs"/>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Last Name:</span>
                    </div>
                    <input type="text"
                           className="input input-bordered w-full max-w-xs"/>
                </label>
                <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden relative">
                    <img src={""}
                         alt="Selected"
                         className="w-full h-full object-cover"
                    />

                </div>
                <input type="file" accept="image/*"
                       className="mt-4"/>
                <div className={"mt-3"}>
                    <button className={"btn btn-accent"}>Update Profile</button>
                </div>
            </div>


        </main>
    );
};

export default Settings;