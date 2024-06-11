// components/DashboardLayout.js
"use client"
const DashboardLayout = ({ children }:any) => {
    return (
      <div>
        <header>Dashboard Header</header>
        {children}
        <footer>Dashboard Footer</footer>
      </div>
    );
  };
  
  export default DashboardLayout;
  