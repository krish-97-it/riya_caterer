import React,{useState,useEffect} from "react";
import Loading from "../component/page-loading";
import GoToTop from "../component/go-to-top";

export default function Gallery(){
    // Set loading state to true initially
    const [isLoading, setLoading] = useState(true);

    // Page will load after 2 seconds
    useEffect(() => {
        // Simulate loading for 2 seconds
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return(
        <div className="app-body">
            <div className="main-content">
                {
                    isLoading ? (
                        <Loading />
                    ) : (
                        <p>This is gallery page</p>
                    )
                }
            </div>
            <GoToTop/>
        </div>
    )
}