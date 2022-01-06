
interface layoutProps {
  children: any;
}

const AdminLayout = ({ children }: layoutProps) => {
    return ( 
  <>
            {children}   
        </>    
  );
};
export default AdminLayout;

