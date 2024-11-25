import React from 'react'
import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const ExpensePage = () => {
  return (
    <MainLayout type="expense">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-1 md:gap-x-6">
      <Card 
           title="Expenses Comparison"
           desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum." 
           />
        
        </div>

      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card 
           title="Expenses Breakdown"
           desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum." 
           />
        <Card title="&nbsp;" />
        <Card title="&nbsp;" />
      </div>

           {/* top content end */}
           {/* bottom content start */}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card 
           title="Expenses Breakdown"

           desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum." 
           />
        <Card 
           desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum." 
           />
      <Card />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  )
}

export default ExpensePage