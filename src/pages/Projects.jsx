import React from 'react';
import pic from '../assets/ai1.jfif';
import pict from '../assets/ai3.jpg';
import pictu from '../assets/ai2.jfif';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  return (
    <div className="bg-light text-white" id='projects'>
      <div className="container py-5">
        <h3 className="text-3xl font-semibold mb-5 text-center text-dark">Projects</h3>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card bg-gray-900 text-white rounded-lg h-100">
              <img
                src="https://user-images.githubusercontent.com/51543360/207629407-1eb404ed-90bf-4f4f-8aa0-94681f2427f7.png"
                alt="Project 1"
                className="card-img-top rounded-top-lg h-64 object-cover"
              />
              <div className="card-body">
                <h4 className="card-title text-dark fw-bold">Flask Social Media</h4>
                <p className="card-text  text-dark">
                  Flask-Social-Media is a Social Media Platforms aimed towards sharing Post or content through Flask Media. Flask-Social-Media provides the user with complete control of their posts such as creation, editing, deletion, like, as well as saving favourite comments for later reference.
                </p>
                <a
                  href=" "
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card bg-gray-900 text-white rounded-lg h-100">
              <img
                src={pic}
                alt="Project 2"
                className="card-img-top rounded-top-lg h-64 object-cover"
              />
              <div className="card-body">
                <h4 className="card-title text-dark fw-bold">Predictive Analytics Tool & System</h4>
                <p className="card-text  text-dark">
                Developed an AI tool for predictive analytics, sentiment detection, and topic modeling, enhancing decision-making and efficiency
                </p>
                <a
                  href=" "
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card bg-gray-900 text-white rounded-lg h-100">
              <img
                src={pict}
                alt="Project 3"
                className="card-img-top rounded-top-lg h-64 object-cover"
              />
              <div className="card-body">
                <h4 className="card-title text-dark fw-bold">Customer Support Chatbot OpenAi Application</h4>
                <p className="card-text  text-dark">
                AI chatbot for customer support, automating responses, handling inquiries, and improving user experience with natural language processing.
                </p>
                <a
                  href=" " className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card bg-gray-900 text-white rounded-lg h-100">
              <img
                src="https://user-images.githubusercontent.com/51543360/210791853-4be5bcff-46e0-4927-9475-f01fb0c02f52.png"
                alt="Project 4"
                className="card-img-top rounded-top-lg h-64 object-cover"
              />
              <div className="card-body">
                <h4 className="card-title text-dark fw-bold">Minifonts</h4>
                <p className="card-text  text-dark">
                  Mini Fonts, the world’s most beautiful fonts. mini fonts typography makes easy to build your websites and apps more beautiful. Our robust catalog of open-source fonts, makes it easy to integrate expressive type seamlessly—no matter where you are in the world.
                </p>
                <a
                  href=" " className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-gray-900 text-white rounded-lg h-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8GJCG9FHxENlBOkB-ddJ4ha8MbTKuLek0DA&s"
                alt="Project 4"
                className="card-img-top rounded-top-lg h-64 object-cover"
              />
              <div className="card-body">
                <h4 className="card-title text-dark fw-bold">Data Analytics Syatem</h4>
                <p className="card-text  text-dark">
                AI-driven analytics for real-time data insights, optimizing business strategies and enhancing decision-making efficiency.
                </p>
                <a
                  href=" " className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-gray-900 text-white rounded-lg h-100">
              <img
                src={pictu}
                alt="Project 4"
                className="card-img-top rounded-top-lg h-64 object-cover"
              />
              <div className="card-body">
                <h4 className="card-title text-dark fw-bold">Yuva GenAi</h4>
                <p className="card-text text-dark">
                AI chatbot for customer support, automating responses, handling inquiries, and improving user experience with natural language processing.
                </p>
                <a
                  href=" " className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;
