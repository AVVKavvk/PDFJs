import React from 'react'

function CertificationPrograms() {
   const Cerificate=[
        {
            "company_name":"GOOGLE",
            "link":"https://www.coursera.org/professional-certificates/google-it-automation?irclickid=SjUVEo1hlxyPT0mR4W1ntzHZUkFUNkTtq33v2U0&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=1359419&utm_content=b2c",
            "img_url":"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/fa/79e521abf14610b4fec9d677901916/0.png?auto=format%2Ccompress&dpr=2&w=&h=45",
            "course_name":"Google IT Automation with Python Professional Certificate"
            
        },
        {
            "company_name":"IBM",
            "link":"https://www.coursera.org/professional-certificates/ibm-data-science?irclickid=SjUVEo1hlxyPT0mR4W1ntzHZUkFUNhRBq33v2U0&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=1359419&utm_content=b2c",
            "img_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3FRb1e6HmXsquHa3XgqBCQ7rPPGPQdgsovBy1qqOLXv9g2tB95Q8ZPjdyMaiNlweR5k&usqp=CAU ",
            "course_name":" IBM Data Science Professional Certificate"
        },
        {
            "company_name":"MICROSOFT",
            "link":"https://learn.microsoft.com/en-us/training/paths/power-plat-fundamentals/",
            "img_url":"http://t3.gstatic.com/images?q=tbn:ANd9GcS6km-cD_vSytVSWHMXb5BsNyvx-Ee58bq9Ak5VyKaYZtKokr7C",
            "course_name":"Microsoft Power Platform Fundamentals"
        },
        {
            "company_name":"UDEMY",
            "link":"https://www.udemy.com/course/web-design-secrets/",
            "img_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE2Z3Bwbq84dNTz7VkYlpMYkzHDM3pRNAZuQ&usqp=CAU",
            "course_name":"Web Design for Web Developers: Build Beautiful Websites!"
        },
        {
            "company_name":"GOOGLE",
            "link":"https://learndigital-staging.withgoogle.com/digitalgarage/course/digital-marketing",
            "img_url":"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/fa/79e521abf14610b4fec9d677901916/0.png?auto=format%2Ccompress&dpr=2&w=&h=45",
            "course_name":"Fundamentals of digital marketing"
        },
        {
            "company_name":"GOOGLE",
            "link":"https://www.coursera.org/learn/cloud-infrastructure-design-process?irclickid=SjUVEo1hlxyPT0mR4W1ntzHZUkFUNlypq33v2U0&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=1359419&utm_content=b2c",
            "img_url":"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/fa/79e521abf14610b4fec9d677901916/0.png?auto=format%2Ccompress&dpr=2&w=&h=45",
            "course_name":" Reliable Google Cloud Infrastructure: Design and Process"
        },
        {
            "company_name":"UDEMY",
            "link":"https://www.udacity.com/course/android-kotlin-developer-nanodegree--nd940?irclickid=zcyWSH1hBxyPT0mR4W1ntzHZUkFUNnyJq33v2U0&irgwc=1&utm_source=affiliate&utm_medium=&aff=1359419&utm_term=&utm_campaign=_best-google-course_&utm_content=&adid=786224",
            "img_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE2Z3Bwbq84dNTz7VkYlpMYkzHDM3pRNAZuQ&usqp=CAU",
            "course_name":"Android Basics by Google"
        },
        {
            "company_name":"UDACITY",
            "link":"https://www.udacity.com/course/firebase-in-a-weekend-by-google-android--ud0352?irclickid=zcyWSH1hBxyPT0mR4W1ntzHZUkFUNGR9q33v2U0&irgwc=1&utm_source=affiliate&utm_medium=&aff=1359419&utm_term=&utm_campaign=_best-google-course_&utm_content=&adid=786224",
            "img_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwn74zNHWSb5_VK-s-faQ__ye1bnOTSQlHag&usqp=CAU",
            "course_name":"Firebase in a Weekend "
        },
        {
            "company_name":"UDEMY",
            "link":"https://www.udemy.com/course/the-complete-guide-to-angular-2/?LSNPUBID=bt30QTxEyjA&ranEAID=bt30QTxEyjA&ranMID=47901&ranSiteID=bt30QTxEyjA-RJWqTsSD4POtrD0F6JSCAQ&utm_medium=udemyads&utm_source=aff-campaign",
            "img_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE2Z3Bwbq84dNTz7VkYlpMYkzHDM3pRNAZuQ&usqp=CAU",
            "course_name":"Angular - The Complete Guide (2023 Edition)"
        },
        {
            "company_name":" IIT KHARAGPUR ",
            "link":"https://nptel.ac.in/courses/102105100",
            "img_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XjvzIK5FYHUz3VXyY9bOHuhV7isVNbf1cQ&usqp=CAU",
            "course_name":"Computational Neuroscience – IIT Kharagpur"
        },
        {
            "company_name":"IIT-ROPAR",
            "link":"https://onlinecourses.nptel.ac.in/noc23_cs110/preview",
            "img_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN-IWL1RpvjaNzh0VP_SnIc7T2no9YpBH2TQ&usqp=CAU",
            "course_name":"Deep Learning - IIT Ropar"
        },
        {
            "company_name":"IIT KHARAGPUR",
            "link":"https://onlinecourses.nptel.ac.in/noc23_cs87/preview",
            "img_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XjvzIK5FYHUz3VXyY9bOHuhV7isVNbf1cQ&usqp=CAU",
            "course_name":"Introduction To Machine Learning - IITKGP"
        },
        {
            "company_name":"Stanford University",
            "link":"https://online.stanford.edu/courses/xee100-introduction-internet-things",
            "img_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSC2Es_smYe5gU5GIeKsxKhJ6jlEz9xBUeLJR7-235bHEIgW70kKlFEmKjsSTpy4Ln9g&usqp=CAU",
            "course_name":"Introduction to Internet of Things"
        },
        {
            "company_name":"HARVARD UNIVERSITY",
            "link":"https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python",
            "img_url":"https://i.ibb.co/VVz1rDm/download-2.png",
            "course_name":"CS50's Introduction to Artificial Intelligence with Python"
        },
        {
            "company_name":"HARVARD UNIVERSITY",
            "link":"https://pll.harvard.edu/course/fundamentals-tinyml",
            "img_url":"https://i.ibb.co/VVz1rDm/download-2.png",
            "course_name":"Fundamentals of TinyML"
        },
        {
            "company_name":"HARVARD UNIVERSITY",
            "link":"https://pll.harvard.edu/course/cs50s-introduction-game-development",
            "img_url":"https://i.ibb.co/VVz1rDm/download-2.png",
            "course_name":"CS50's Introduction to Game Development"
        },
        {
            "company_name":"UNIVERSITY OF MICHIGAN",
            "link":"https://www.coursera.org/learn/negotiation-skills?action=enroll",
            "img_url":"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/b6/f49480857811e59a278d7d1ca6079f/U-M_LogoSmHoriz_200x48.png?auto=format%2Ccompress&dpr=2&w=&h=45",
            "course_name":"Successful Negotiation: Essential Strategies and Skills"
        },
    ];
  return (
    <div className='hello1'>
     <h1>CERTIFICATES AND COURSES</h1>
      {Cerificate.map((item)=>{
        return  <a href={item.link}><div>
      <br />
      <br />
            <img src={item.img_url} alt="" />
           
            <h1>Organisation:{item.company_name}</h1>
           
            <h3>Course:{item.course_name}</h3>
            <br />
<br />
        </div>
        </a>
      })}
    </div>
  )
}

export default CertificationPrograms
