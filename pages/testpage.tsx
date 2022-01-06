

import React, { ReactElement } from "react";
import AdminLayout from "../components/Layout/AdminLayout";
import { withAuth } from "../hooks/route";


function TestPage() {
    return (
        <>
            
            
            </>
    )
}
const withAuthPage = withAuth(TestPage);
export default withAuthPage;
//#region getLayout
withAuthPage.getLayout = function getLayout(page:ReactElement) {
    return (
      <AdminLayout>
            {page}
            </AdminLayout>
        
    )
  }
  //#endregion

