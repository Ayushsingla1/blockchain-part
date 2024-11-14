import { ABI, contractAddress } from "@/configs/contract";
import { useAccount, useReadContract } from "wagmi";

const Auth = () => {

    const {address} = useAccount();

    const {data , isLoading} = useReadContract({
        abi : ABI,
        address : contractAddress,
        functionName : "checkRole",
        args : [address]
    })

    if(isLoading){
        return <div>loading...</div>
    }
    else{
        return <div>{data}</div>
    }
}

export default Auth;