import React from 'react'
import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const GoalPage = () => {
  return (
    <MainLayout type="goal">
      {/* top content start*/}
      {/* <div className="md:grid md:grid-cols-2 md:gap-x-6">
          <Card title="&nbsp;" />
      <Card 
           title="Goals Comparison"
           variant="md:col-span-3 text-primary"
           desc="Lorem ipsum dolor ab quibusdam facilis distinctio ratione, sequi vel porro eum." 
           />
        </div> */}

        <div className="md:grid md:grid-cols-2 md:gap-x-6">
            <Card title="Goals Breakdown" />
            <Card 
            title="&nbsp;"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum." 
            />
      </div>

      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card 
           title="Expenses Goal By Category"
           desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum." 
           />
        <Card title="&nbsp;" />
        <Card title="&nbsp;" />
      </div>

           {/* top content end */}
           {/* bottom content start */}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card 
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

export default GoalPage