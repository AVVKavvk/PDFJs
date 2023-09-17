import React, { useState } from "react";
import jsPDF from "jspdf";
import linkedinIcon from "./assets/linkedin.png";
import Gmail from "./assets/gmail.png";
import phone from "./assets/phone.png";
import github from "./assets/github.png";
import link from "./assets/link.png";
const PDF = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [stream, setStream] = useState("");
  const [cgpa, setCGPA] = useState("");
  const [collegeCity, setCollegeCity] = useState("");
  const [collegeCountry, setCollegeCountry] = useState("");
  const [degreeCompletionYear, setDegreeCompletionYear] = useState("");
  const [projects, setProjects] = useState([
    { title: "", description: "", githubLink: "", projectLink: "" },
  ]);
  const [achievements, setAchievements] = useState(["", ""]);

  const [linkedinUrl, setLinkedinUrl] = useState("");

  const [ProgrammingLanguage, setProgrammingLanguage] = useState([
    "",
    "",
    "",
    "",
    "",
  ]);
  const [skills, setSkills] = useState(["", "", "", "", "", "", "", "", ""]);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleLinkedinInputChange = e => {
    const url = e.target.value;
    setLinkedinUrl(url);

    // Extract the LinkedIn name from the URL (you can adjust this based on your URL pattern)
    const name = url.split("/").filter(Boolean).pop();
  };

  const handleLanguageInputChange = (e, index) => {
    const newProgrammingLanguage = [...ProgrammingLanguage];
    newProgrammingLanguage[index] = e.target.value;
    setProgrammingLanguage(newProgrammingLanguage);
  };

  const handleSkillInputChange = (e, index) => {
    const newSkills = [...skills];
    newSkills[index] = e.target.value;
    setSkills(newSkills);
  };

  const handleProjectInputChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  const addProject = () => {
    if (projects.length < 3) {
      const newProjects = [
        ...projects,
        { title: "", description: "", githubLink: "", projectLink: "" },
      ];
      setProjects(newProjects);
    }
  };

  const removeProject = index => {
    if (projects.length > 1) {
      const newProjects = [...projects];
      newProjects.splice(index, 1);
      setProjects(newProjects);
    }
  };

  const handleAchievementInputChange = (e, index) => {
    const newAchievements = [...achievements];
    newAchievements[index] = e.target.value;
    setAchievements(newAchievements);
  };

  const generatePdf = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica");
    doc.setFontSize(30);

    const textWidth =
      (doc.getStringUnitWidth(name) * doc.internal.getFontSize()) /
      doc.internal.scaleFactor;
    const centerX = (doc.internal.pageSize.getWidth() - textWidth) / 2;

    doc.text(name, centerX, 15);

    doc.setFontSize(12);
    doc.setTextColor(90, 90, 90);
    doc.addImage(phone, "PNG", 10, 20, 7, 7);
    const contactInfo = `: ${phoneNumber}`;
    doc.text(contactInfo, 19, 25);

    doc.addImage(Gmail, "PNG", 60, 20, 7, 7);
    const contactInfo1 = `: ${email}`;
    doc.text(contactInfo1, 69, 25);

    doc.addImage(linkedinIcon, "PNG", 177, 20, 7, 7);
    doc.setFont("helvetica");
    doc.textWithLink("LinkedIn", 187, 25, { url: linkedinUrl });
    doc.setFontSize(16);
    doc.setLineWidth(0.5);
    doc.line(10, 30, 200, 30);
    doc.setTextColor(127, 0, 255);
    doc.text("Education", 10, 40);
    doc.setFontSize(12);
    doc.setTextColor(90, 90, 90);
    // Left-aligned education details: College Name, Stream, CGPA
    const leftAlignedDetails = `${college}\n${stream}\nCGPA: ${cgpa}`;
    doc.text(leftAlignedDetails, 15, 49);

    // Right-aligned education details: College City, College Country, Degree Completion Year
    const rightAlignedDetails = `${degreeCompletionYear}\n${collegeCity} , ${collegeCountry}`;
    const rightAlignX = 160;
    doc.text(rightAlignedDetails, rightAlignX, 49);
    doc.setLineWidth(0.5);
    doc.line(10, 63, 200, 64);
    doc.setFontSize(16);
    doc.setTextColor(127, 0, 255);
    doc.text("Skills", 10, 73);
    doc.setFontSize(10);
    doc.setTextColor(90, 90, 90);
    const firstFiveSkills = skills.slice(0, 5);
    const remainingSkills = skills.slice(5);

    const firstFiveSkillsString = firstFiveSkills
      .filter(skill => skill.trim() !== "")
      .join(", ");
    doc.text(`${firstFiveSkillsString}`, 15, 81);

    // Concatenate the remaining skills into a single string
    const remainingSkillsString = remainingSkills
      .filter(skill => skill.trim() !== "")
      .join(", ");
    doc.text(`${remainingSkillsString}`, 15, 88);

    doc.setFontSize(16);
    doc.line(10, 95, 200, 95);
    doc.setTextColor(127, 0, 255);
    doc.text("Programming Language", 10, 105);
    doc.setFontSize(10);
    doc.setTextColor(90, 90, 90);
    const ProgrammingLanguage1 = ProgrammingLanguage.slice(0, 4);

    // Display the first set of Programming Languages
    const firstThreeProgrammProgrammingLanguageString =
      ProgrammingLanguage1.filter(lang => lang.trim() !== "").join(", ");
    doc.text(`${firstThreeProgrammProgrammingLanguageString}`, 15, 113);

    doc.line(10, 119, 200, 121);
    doc.setTextColor(127, 0, 255);
    doc.setFontSize(16);

    doc.text("Achievements", 10, 130);
    doc.setFontSize(12);
    doc.setTextColor(90, 90, 90);

    const availableSpace = 180; // Adjust this value as needed
    let yOffset = 140; // Starting y-coordinate

    achievements.forEach(achievement => {
      if (achievement.trim() !== "") {
        doc.text(`. ${achievement}`, 15, yOffset, { maxWidth: availableSpace });
      }
      yOffset += 10; // Move to the next line
    });

    doc.line(10, 161, 200, 161);
    doc.setTextColor(127, 0, 255);
    doc.setFontSize(16);
    doc.text("Projects", 10, 170);
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    projects.forEach((project, index) => {
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      const yOffset = 180 + index * 35;
      doc.setTextColor(0, 0, 0);
      doc.text(`Project ${index + 1}: ${project.title}`, 10, yOffset);

      const descriptionText = project.description;
      const maxWidth = 170;

      const descriptionLines = doc.splitTextToSize(descriptionText, maxWidth);

      doc.setFontSize(10);
      doc.setTextColor(128, 128, 128);

      descriptionLines.forEach((line, lineIndex) => {
        doc.text(line, 10, yOffset + 10 + lineIndex * 5);
      });

      doc.setTextColor(90, 90, 90);
      const githubImage = new Image();
      githubImage.src = `${github}`;
      doc.addImage(githubImage, "PNG", 175, yOffset - 5, 7, 7);
      doc.textWithLink(`GitHub `, 185, yOffset, {
        url: project.githubLink,
      });

      const linkImage = new Image();
      linkImage.src = `${link}`;
      doc.addImage(linkImage, "PNG", 175, yOffset + 6, 6, 5);
      doc.textWithLink(`Project`, 185, yOffset + 10, {
        url: project.projectLink,
      });
    });

    doc.save("resume.pdf");
  };

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col justify-center py-5 items-center flex-wrap">
      <h1 className="font-semibold text-2xl">Resume Generator</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => handleInputChange(e, setName)}
          className="border border-gray-300 rounded p-2"
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={e => handleInputChange(e, setPhoneNumber)}
          className="border border-gray-300 rounded p-2"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={e => handleInputChange(e, setEmail)}
          className="border border-gray-300 rounded p-2"
        />
      </div>
      <div>
        <label htmlFor="linkedinUrl">LinkedIn:</label>
        <input
          type="text"
          id="linkedinUrl"
          value={linkedinUrl}
          onChange={handleLinkedinInputChange}
          className="border border-gray-300 rounded p-2"
        />
      </div>
      <div>
        <label htmlFor="college">College Name:</label>
        <input
          type="text"
          id="college"
          value={college}
          onChange={e => handleInputChange(e, setCollege)}
          className="border border-gray-300 rounded p-2"
        />
      </div>
      <div>
        <label htmlFor="stream">Stream:</label>
        <input
          type="text"
          id="stream"
          value={stream}
          onChange={e => handleInputChange(e, setStream)}
          className="border border-gray-300 rounded p-2"
        />
      </div>
      <div>
        <label htmlFor="cgpa">CGPA:</label>
        <input
          type="text"
          id="cgpa"
          value={cgpa}
          onChange={e => handleInputChange(e, setCGPA)}
          className="border border-gray-300 rounded p-2"
        />
      </div>
      <div>
        <label htmlFor="collegeCity">College City:</label>
        <input
          type="text"
          id="collegeCity"
          value={collegeCity}
          onChange={e => handleInputChange(e, setCollegeCity)}
          className="border border-gray-300 rounded p-2"
        />
      </div>
      <div>
        <label htmlFor="collegeCountry">College Country:</label>
        <input
          type="text"
          id="collegeCountry"
          value={collegeCountry}
          onChange={e => handleInputChange(e, setCollegeCountry)}
          className="border border-gray-300 rounded p-2"
        />
      </div>
      <div>
        <label htmlFor="degreeCompletionYear">Degree Completion Year:</label>
        <input
          type="text"
          id="degreeCompletionYear"
          value={degreeCompletionYear}
          onChange={e => handleInputChange(e, setDegreeCompletionYear)}
          className="border border-gray-300 rounded p-2"
        />
      </div>
      <div>
        <label htmlFor="skills">Skills:</label>
        {skills.map((skill, index) => (
          <input
            key={index}
            type="text"
            value={skill}
            onChange={e => handleSkillInputChange(e, index)}
            className="border border-gray-300 rounded p-2"
          />
        ))}
      </div>
      <div>
        <label htmlFor="ProgrammingLanguage">Programming Language:</label>
        {ProgrammingLanguage.map((language, index) => (
          <input
            key={index}
            type="text"
            value={language}
            onChange={e => handleLanguageInputChange(e, index)}
            className="border border-gray-300 rounded p-2"
          />
        ))}
      </div>
      <div>
        {achievements.map((achievement, index) => (
          <div key={index}>
            <label>Achievement {index + 1}:</label>
            <textarea
              placeholder="Achievement"
              value={achievement}
              onChange={e => handleAchievementInputChange(e, index)}
              rows="4"
              cols="50"
              className="border border-gray-300 rounded p-2"
            ></textarea>
          </div>
        ))}
      </div>

      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <label>Project {index + 1}:</label>
            <input
              type="text"
              placeholder="Title"
              value={project.title}
              onChange={e =>
                handleProjectInputChange(index, "title", e.target.value)
              }
              className="border border-gray-300 p-2"
            />
            <textarea
              placeholder="Description"
              value={project.description}
              onChange={e =>
                handleProjectInputChange(index, "description", e.target.value)
              }
              rows="4"
              cols="50"
              className="border border-gray-300 p-2"
            ></textarea>
            <input
              type="text"
              placeholder="GitHub Link"
              value={project.githubLink}
              onChange={e =>
                handleProjectInputChange(index, "githubLink", e.target.value)
              }
              className="border border-gray-300 p-2"
            />
            <input
              type="text"
              placeholder="Project Link"
              value={project.projectLink}
              onChange={e =>
                handleProjectInputChange(index, "projectLink", e.target.value)
              }
              className="border border-gray-300 p-2"
            />
            {projects.length > 1 && (
              <button
                onClick={() => removeProject(index)}
                className="bg-red-500 text-white px-2 py-1 mt-2"
              >
                Remove Project
              </button>
            )}
          </div>
        ))}
        {projects.length < 3 && (
          <button
            onClick={addProject}
            className="bg-blue-500 text-white px-2 py-1 mt-2"
          >
            Add Project
          </button>
        )}
      </div>
      <button onClick={generatePdf}>Generate Resume PDF</button>
    </div>
  );
};

export default PDF;
