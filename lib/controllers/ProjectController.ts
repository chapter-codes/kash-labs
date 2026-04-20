// 'server-only'
import mongoose from "mongoose";
import Project from "@/lib/models/Project";
import { TProject } from "@/components/home/types";
import { cache } from "react";
// import Error from "next/error";

const db: string = process.env?.DB_URI || "";

const newProjectData = {
  title: "Rare breed 10",
  logo: "/images/rare-breed.png",
  category: "Web Design",
  description:
    "A youth fellowship empowering next-generation leaders through research, training and community to impact ministry, campuses, and the nation.",
  link: "https://www.behance.net/gallery/218404309/RARE-BREED-LOGO",
};

// addProject(newProjectData)
export const getProjects = cache(async (start = 0, limit = 20):Promise<TProject[] | [] | undefined> =>{
  function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  try {
    await mongoose.connect(db);
      // await sleep(5000); // simulate delay
      const foundProjects = await Project.find().limit(limit)
       return foundProjects.map(
      ({ logo, title, category, description, link }) => ({
        logo,
        title,
        category,
        description,
        link,
      })
    );
   
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("error", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  } finally {
    await mongoose.disconnect();
  }
})

export const findProjects = cache(async({ title }: { title: string }): Promise<TProject[] | [] | undefined> => {
 
  try {
    await mongoose.connect(db);
    const foundProject = await Project.find({ title: new RegExp(title, "i") });
    console.log(foundProject);

    return foundProject.map(({ logo, title, category, description, link }) => ({
      logo,
      title,
      category,
      description,
      link,
    }));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unexpected error:", error);
    }
  } finally {
    await mongoose.disconnect();
  }
})

export async function addProject(projectData: any) {
  // sanitize data first
  try {
    await mongoose.connect(db);
    const projectExists = await Project.exists({ title: projectData.title });
    console.log("foundProject", projectExists);

    if (projectExists) return console.log("project title already exists");

    const newProject = new Project(projectData);
    const response = await newProject.save();
    console.log("project added");
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unexpected error:", error);
    }
  } finally {
    await mongoose.disconnect();
  }
}

export async function updateProject(data: any) {
  // sanitize data
  try {
    await mongoose.connect(db);
    const project = await Project.findOne({ title: data.title });
    if (!project) return console.log("project  not found");

    for (const key in data) {
      if (key == "title") {
        project.title = data.newTitle;
        continue;
      }
      if (key == "newTitle") {
        continue;
      }
      (project as any)[key] = data[key];
    }
    const response = await project.save();
    console.log("project updated");
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unexpected error:", error);
    }
  } finally {
    await mongoose.disconnect();
  }
}

export async function deleteProject(title: string) {
  try {
    await mongoose.connect(db);
    const foundProject = await Project.findOne({ title: title });
    console.log("found", foundProject);
    if (!foundProject) return console.log("project not found");
    const response = await foundProject.deleteOne({ _id: foundProject._id });
    console.log("sucessfully deleted");
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unexpected error:", error);
    }
  } finally {
    await mongoose.disconnect();
  }
}

// updateProject({ title: "edited 10", newTitle: 'edited 10', age: 10});
// deleteProject("edited 10");

// const projects = [
//   {
//     logo: "/images/rare-breed.png",
//     title: "Rare Breed",
//     category: "Web Design",
//     description:
//       "A youth fellowship empowering next-generation leaders through research, training and community to impact ministry, campuses, and the nation.",
//     link: "https://www.behance.net/gallery/218404309/RARE-BREED-LOGO",
//   },
//   {
//     logo: "/images/igbo-club.png",
//     title: "Igbo Ambassadors Club UX",
//     category: "Web Design",
//     description:
//       "A global network uniting and empowering leaders among the Igbo diaspora, promoting Igbo culture, fostering pride, professionalism, community, and global engagement.",
//     link: "https://www.behance.net/gallery/218383579/IGBO-AMBASSADORS-LOGO",
//   },
//   {
//     logo: "/images/rare-breed.png",
//     title: "Rare Breed",
//     category: "Web Design",
//     description:
//       "A youth fellowship empowering next-generation leaders through research, training and community to impact ministry, campuses, and the nation.",
//     link: "https://www.behance.net/gallery/218404309/RARE-BREED-LOGO",
//   },
//   {
//     logo: "/images/dearly-beloved.png",
//     title: "Dearly Beloved",
//     category: "Web Design",
//     description:
//       "A youth-operated benefit spreading God’s love, nurturing purpose, and raising a generation of love in local cities and rural towns.",
//     link: "https://www.behance.net/gallery/218402817/DEARLY-BELOVED-LOGO",
//   },
// ];

export async function addMany(projectArr: any) {
  try {
    await mongoose.connect(db);
    console.log("connected");
    // const projectsExist = await Project.exists(projectArr)
    // console.log('exists', projectsExist)

    const response = await Project.create(projectArr);
    console.log(response);
    return { status: 201 };
  } catch (error) {
    console.log("error", error);
  } finally {
    await mongoose.disconnect();
  }
}

// updateMany(projects)
// module.exports = {
//   getProjects,
//   getProject,
//   addProject,
//   updateProject,
//   deleteProject,
//   addMany,
// };
