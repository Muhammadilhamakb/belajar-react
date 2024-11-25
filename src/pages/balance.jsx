import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const BalancePage = () => {
  return (
    <MainLayout type="balance">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Balances" />
        <Card title="&nbsp;" />
        <Card
           title="&nbsp"
           desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nesciunt quaerat! Adipisci deleniti modi autem quasi eaque id, sequi sunt eligendi, recusandae deserunt," 
           />
      </div>

           {/* top content end */}
           {/* bottom content start */}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
      <Card desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nesciunt quaerat! Adipisci deleniti modi autem quasi eaque id, sequi sunt eligendi, recusandae deserunt," />
        <Card />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default BalancePage;