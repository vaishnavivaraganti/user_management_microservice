import React from "react";

function DummyPage(){
    // useEffect(() => {

    //     let isApiSubscribed = true;

    //     let searchConstraint = {};
    //     if(req.body.User_ID){
    //         searchConstraint.User_ID = req.body.User_ID;
    //     }
    //     if(req.body.User_Name){
    //         searchConstraint.User_Name = req.body.User_Name;
    //     }
    //     if(req.body.Email){
    //         searchConstraint.Email = req.body.Email;
    //     }
    //     if(req.body.Roles){
    //         searchConstraint.Roles = req.body.Roles;
    //     }
    //     if(req.body.Action){
    //         searchConstraint.Action = req.body.Action;
    //     }
    
    //     const getUserList = async () => {
    
    //         const userListResponse =  await fetch(`http://localhost:8080/search/${page}`, {
    
    //           method: "POST",
    
    //           headers: {
    
    //             "Content-Type": "application/json"
    
    //           },
    
    //           body: JSON.stringify({ ...searchConstraint })
    
    //         })
    
    //         const data=await userListResponse.json()
    
    //         setUserList(data);
    
         
    
    //     }
    
    //     if (isApiSubscribed) {
    
    //       getUserList();
    
    //     }
    
    //     return () => {
    
    //       isApiSubscribed = false;
    
    //     }
    
    //   }, [page, userid, username, email, roles, isActive]);
    return (
        <>
            <h1>
                Welcome !
            </h1>
        </>
    );
}

export default DummyPage;