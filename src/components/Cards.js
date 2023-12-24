import React from 'react'
import '../images/images.css';


const Cards = () => {
  return (
    <div style={{ marginTop: '150px', marginLeft:'100px', marginRight:'100px' }}>
      <div class="row  g-4">
  <div class="col">
    
    <div class="card h-100">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrpkBS2oSUD1yPwqcz9N8FjepcBdgt50yfg&usqp=CAU" class="card-img-top isize" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">DSA Introduction</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://clipart-library.com/newhp/246-2460605_development3-computer-programming-clipart.png" class="card-img-top isize" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><strong> DSA Theory</strong></h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 rounded-3 ">
      <img src="https://img.freepik.com/premium-vector/clipboard-checklist-with-assessment-assessment-marketing-vector-illustration_123447-5555.jpg?w=2000" class="card-img-top isize" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><strong>Quizes and Assessments</strong> </h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://media.istockphoto.com/id/871734044/vector/business-concept-expert-project-manager-work-hard-vector-illustration.jpg?s=612x612&w=0&k=20&c=FMUqB77Oscpmir7Q8uJ1_bXGBZgNLFocCnxaEDq6zFE=" class="card-img-top isize" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><strong>Projects (Coming soon )</strong> </h5>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards
