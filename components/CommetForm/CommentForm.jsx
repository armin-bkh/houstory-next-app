import { useAuth } from "@/providers/AuthProvider/AuthProvider";
import { UserCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useState } from "react";

const CommentForm = ({ blogId }) => {
  const { auth } = useAuth();
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    text: "",
  });

  const changeHandler = (e) => {
    setFormValues({
      text: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!auth) {
      router.push("/auth/login");
      return;
    }
    setFormValues({
      text: "",
    });
    console.log(blogId);
  };

  return (
    <form className="flex flex-col p-2" onSubmit={submitHandler}>
      <div className="flex items-center mb-1">
        <UserCircleIcon className="w-10 mr-1 text-gray-500" />
        <div>
          {auth ? <p className="text-sm">{auth.email}:</p> : <p>guest:</p>}
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <input
          placeholder="leave a comment..."
          className="px-2 py-1 text-sm flex-1 bg-gray-200 outline-none rounded-lg mb-1 md:mb-0 md:mr-2"
          type="text"
          value={formValues.text}
          onChange={changeHandler}
        />
        <button
          className="px-2 py-1 border-2 rounded-lg border-gray-200 text-sm hover:bg-gray-200 transition"
          type="submit"
        >
          submit
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
