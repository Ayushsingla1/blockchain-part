import { contractAddress , ABI} from "@/configs/contract";
import { useState } from "react";
import { useReadContract } from "wagmi";
import { useAccount } from "wagmi";
const Interaction = () => {

    const [clicked , setclicked] = useState(true)

    const connectedAccount = useAccount();
    
    const {data,isError,isLoading,isFetched} = useReadContract({
        abi : ABI,
        address : contractAddress,
        functionName : "getMovie",
        account : connectedAccount.address,
        args : [0],
        query : {
            enabled : clicked,
        }
    })

    console.log("data is : " , data , "  " , isError , "  " , isLoading , "  " , isFetched )

}

export default Interaction;