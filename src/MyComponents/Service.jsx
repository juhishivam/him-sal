import React from 'react'
import Card from '../MyComponents/Card'
import Sdata from '../MyComponents/Sdata'

const Service = () => {
    return (
        <>
       
            <div className="ourservice" >
                <h1 className="text-center">Integrated End-to-End  Services</h1>
            </div>
            
            <div className="ourservice1">
                <p className="text-center text-service">Ryan is focused on your overall tax performance—providing innovative solutions to the underlying causes <br/> 
                of the errors we identify—and creating greater opportunities to measure and improve your efficiency, develop a more<br/> strategic approach to tax, and deliver outstanding value to your shareholders.</p>
            </div>

            <div className="container-fluid md-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">

                            <div className="row gy-4">
                                {
                                    Sdata.map((val, index) => {
                                        return <Card
                                            key={index}
                                            imgsrc={val.imgsrc}
                                            title={val.title}
                                        />
                                    })
                                }

                            </div>



                        </div>

                    </div>

                </div>

            </div>
           
        </>
    )
}
export default Service;
