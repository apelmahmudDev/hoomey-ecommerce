import { useEffect, useState } from "react";
import { useAppDispatch } from "../store";
import { userLoggedIn } from "../store/slices/authSlice";

const useAuthCheck = () => {
	const dispatch = useAppDispatch();
	const [isAuthCheck, setIsAuthCheck] = useState(false);

	useEffect(() => {
		const accessToken = localStorage.getItem("accessToken");

		if (accessToken) {
			const token = JSON.parse(accessToken);

			if (token) {
				dispatch(userLoggedIn(token));
			}
		}

		setIsAuthCheck(true);
	}, [dispatch]);

	return isAuthCheck;
};

export default useAuthCheck;
