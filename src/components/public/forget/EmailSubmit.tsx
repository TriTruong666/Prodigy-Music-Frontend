import React from "react";

interface EmailSubmitProps {
  setForgetProcess: (value: number) => void;
}

export const EmailSubmit: React.FC<EmailSubmitProps> = ({
  setForgetProcess,
}) => {
  // handle forget process
  const handleForgetProcessNext = () => setForgetProcess(2);
  return (
    <div className="w-[50%] self-center flex flex-col gap-y-[10px]">
      <h2 className="text-[40px] font-light_poppins font-semibold my-[20px]">
        Forget your password?
      </h2>
      <div className="relative mt-[5px]">
        <input
          type="text"
          id="email"
          className="block px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg border border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-800 peer"
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/2 rtl:peer-focus:left-auto start-1"
        >
          Email
        </label>
      </div>
      {/* <p className="text-sm text-red-500">
        This email is not existed in our database, please check your email
        again.
      </p> */}
      <button
        onClick={handleForgetProcessNext}
        className="py-[12px] px-[20px] rounded-full bg-green-200 my-[10px] font-semibold hover:bg-opacity-70"
      >
        Send code
      </button>
      <p className="text-sm text-gray-700">
        Enter the email address associated with your account and we'll send you
        a code to reset your password.
      </p>
    </div>
  );
};
