import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { VisionMissionComponent } from './components/vision-mission/vision-mission.component';
import { AboutSymbiosisComponent } from './components/about-symbiosis/about-symbiosis.component';
import { FounderComponent } from './components/founder/founder.component';
import { PriDirectorComponent } from './components/pri-director/pri-director.component';
import { DirectorComponent } from './components/director/director.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { StaffLoginComponent } from './components/staff-login/staff-login.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UpdateSubtopicComponent } from './components/update/update-subtopic/update-subtopic.component';
import { SubtopicListComponent } from './components/list/subtopic-list/subtopic-list.component';
import { AddSubtopicComponent } from './components/admin/add/add-subtopic/add-subtopic.component';
import { TopicListComponent } from './components/list/topic-list/topic-list.component';
import { UpdateTopicComponent } from './components/update/update-topic/update-topic.component';
import { AddTopicComponent } from './components/admin/add/add-topic/add-topic.component';
import { TopicSubtopicDetailsComponent } from './components/topic-subtopic-details/topic-subtopic-details.component';
import { CourseListComponent } from './components/list/course-list/course-list.component';
import { AddCourseComponent } from './components/admin/add/add-course/add-course.component';
import { UpdateCourseComponent } from './components/update/update-course/update-course.component';
import { CourseTopicDetailsComponent } from './components/course-topic-details/course-topic-details.component';
import { AddBatchComponent } from './components/admin/add/add-batch/add-batch.component';
import { BatchListComponent } from './components/list/batch-list/batch-list.component';
import { UpdateBatchComponent } from './components/update/update-batch/update-batch.component';
import { BatchTrainerDetailsComponent } from './components/batch-trainer-details/batch-trainer-details.component';
import { AddTrainerComponent } from './components/admin/add/add-trainer/add-trainer.component';
import { TrainerListComponent } from './components/list/trainer-list/trainer-list.component';
import { AddProfileComponent } from './components/admin/add/add-profile/add-profile.component';
import { ProfileListComponent } from './components/list/profile-list/profile-list.component';
import { UpdateProfileComponent } from './components/update/update-profile/update-profile.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { TrainerDashboardComponent } from './components/trainer/trainer-dashboard/trainer-dashboard.component';
import { OneProfileComponent } from './components/trainer/one-profile/one-profile.component';
import { OneProfileDetailsComponent } from './components/trainer/one-profile-details/one-profile-details.component';
import { AssociatedSubtopicComponent } from './components/trainer/associated-subtopic/associated-subtopic.component';
import { AssociatedBatchesComponent } from './components/trainer/associated-batches/associated-batches.component';
import { UpdateOneProfileComponent } from './components/trainer/update-one-profile/update-one-profile.component';
import { OneBatchDetailsComponent } from './components/trainer/one-batch-details/one-batch-details.component';
import { BatchwiseTrainerTopicsComponent } from './components/batchwise-trainer-topics/batchwise-trainer-topics.component';
import { BatchwiseTrainerSubtopicsComponent } from './components/batchwise-trainer-subtopics/batchwise-trainer-subtopics.component';
import { TrainerProfileDetailsComponent } from './components/trainer/profile-details/trainer-profile-details.component';
import { ProfileAssociatedSubtopicsComponent } from './components/trainer/profile-associated-subtopics/profile-associated-subtopics.component';

const routes: Routes = [
  {path:"courses", component: CoursesComponent},
  {path:"home", component: HomeComponent},
  {path:"vision-mission", component:VisionMissionComponent},
  {path:"about-symb", component: AboutSymbiosisComponent},
  {path:"founder", component: FounderComponent},
  {path:"pri-director", component: PriDirectorComponent},
  {path:"director", component: DirectorComponent},
  {path:"contact-us", component: ContactUsComponent},
  {path:"staff-login", component: StaffLoginComponent},

  {path:"admin-login", component: AdminLoginComponent},
  {path:"admin-dashboard", component: AdminDashboardComponent},

  {path:"listSubtopic", component: SubtopicListComponent},
  {path:"updateSubtopic/:id", component: UpdateSubtopicComponent},
  {path:"addSubtopic", component: AddSubtopicComponent},
  
  {path:"listTopic", component: TopicListComponent},
  {path:"updateTopic/:id", component: UpdateTopicComponent},
  {path:"addTopic", component: AddTopicComponent},
  {path:"detailsTopicSubtopic/:tid", component: TopicSubtopicDetailsComponent},

  {path:"listCourse", component: CourseListComponent},
  {path:"updateCourse/:id", component: UpdateCourseComponent},
  {path:"addCourse", component: AddCourseComponent},
  {path:"detailsCourseTopic/:cid", component: CourseTopicDetailsComponent},

  {path:"listBatch", component: BatchListComponent},
  {path:"updateBatch/:id", component: UpdateBatchComponent},
  {path:"addBatch", component: AddBatchComponent},
  {path:"detailsBatchTrainer/:bid", component: BatchTrainerDetailsComponent},

  {path:"listTrainer", component: TrainerListComponent},
  {path:"addTrainer", component: AddTrainerComponent},

  {path:"addProfile", component: AddProfileComponent},
  {path:"listProfile", component: ProfileListComponent},
  {path:"updateProfile/:id", component: UpdateProfileComponent},
  {path:"detailsProfile/:id", component: ProfileDetailsComponent},
  {path:"trainerDetailsProfile/:trainerid/:pid", component: TrainerProfileDetailsComponent},

  {path:"trainer-dashboard/:trainerid", component: TrainerDashboardComponent},
  
  {path:"trainer-dashboard/:trainerid/:pid", component: TrainerDashboardComponent},
  {path:"getOneProfile/:trainerid/:pid", component: OneProfileComponent},
  {path:"getOneProfileDetails/:pid",component: OneProfileDetailsComponent},
  
  {path:"getOneProfileDetails/:trainerid/:pid/:bid",component: OneProfileDetailsComponent},
  {path:"getOneBatchDetails/:tid/:id",component: OneBatchDetailsComponent},
  {path:"associatedSubTopics/:trainerid/:pid/:bid/:topicid", component: AssociatedSubtopicComponent},
  {path:"profileAssociatedSubTopics/:trainerid/:pid/:topicid", component: ProfileAssociatedSubtopicsComponent},
  {path:"getAssociatedBathces/:trainerid/:pid", component:AssociatedBatchesComponent},
  {path:"updateOneProfile/:trainerid/:pid", component: UpdateOneProfileComponent},
  {path:"batchwiseTrainerTopics/:bid/:id", component: BatchwiseTrainerTopicsComponent},
  {path:"BatchWiseSubtopics/:bid/:id", component: BatchwiseTrainerSubtopicsComponent}

];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
