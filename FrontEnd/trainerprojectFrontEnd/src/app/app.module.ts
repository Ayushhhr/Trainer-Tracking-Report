import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ClgPhotoComponent } from './components/clg-photo/clg-photo.component';
import { FooterComponent } from './components/footer/footer.component';
import { AwesomeFeaturesComponent } from './components/awesome-features/awesome-features.component';
import { PopularCoursesComponent } from './components/popular-courses/popular-courses.component';
import { CommunityExpertsComponent } from './components/community-experts/community-experts.component';
import { AluminiSaysComponent } from './components/alumini-says/alumini-says.component';
import { OurCollaboratorsComponent } from './components/our-collaborators/our-collaborators.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { VisionMissionComponent } from './components/vision-mission/vision-mission.component';
import { AboutSymbiosisComponent } from './components/about-symbiosis/about-symbiosis.component';
import { FounderComponent } from './components/founder/founder.component';
import { DirectorComponent } from './components/director/director.component';
import { PriDirectorComponent } from './components/pri-director/pri-director.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { StaffLoginComponent } from './components/staff-login/staff-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AdminNavbarComponent } from './components/admin/admin-navbar/admin-navbar.component';
import { SubtopicListComponent } from './components/list/subtopic-list/subtopic-list.component';
import { UpdateSubtopicComponent } from './components/update/update-subtopic/update-subtopic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSubtopicComponent } from './components/admin/add/add-subtopic/add-subtopic.component';
import { TopicListComponent } from './components/list/topic-list/topic-list.component';
import { AddTopicComponent } from './components/admin/add/add-topic/add-topic.component';
import { UpdateTopicComponent } from './components/update/update-topic/update-topic.component';
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
import { AddProfileComponent } from './components/admin/add/add-profile/add-profile.component';
import { TrainerListComponent } from './components/list/trainer-list/trainer-list.component';
import { ProfileListComponent } from './components/list/profile-list/profile-list.component';
import { UpdateProfileComponent } from './components/update/update-profile/update-profile.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { TopicFilterPipe } from './filters/topic-filter.pipe';
import { SubtopicFilterPipe } from './filters/subtopic-filter.pipe';
import { BatchFilterPipe } from './filters/batch-filter.pipe';
import { ProfileFilterPipe } from './filters/profile-filter.pipe';
import { TrainerFilterPipe } from './filters/trainer-filter.pipe';
import { CourseFilterPipe } from './filters/course-filter.pipe';
import { TrainerDashboardComponent } from './components/trainer/trainer-dashboard/trainer-dashboard.component';
import { TrainerHeaderComponent } from './components/trainer/trainer-header/trainer-header.component';
import { TrainerNavbarComponent } from './components/trainer/trainer-navbar/trainer-navbar.component';
import { OneProfileComponent } from './components/trainer/one-profile/one-profile.component';
import { OneProfileDetailsComponent } from './components/trainer/one-profile-details/one-profile-details.component';
import { AssociatedSubtopicComponent } from './components/trainer/associated-subtopic/associated-subtopic.component';
import { AssociatedBatchesComponent } from './components/trainer/associated-batches/associated-batches.component';
import { UpdateOneProfileComponent } from './components/trainer/update-one-profile/update-one-profile.component';
import { OneBatchDetailsComponent } from './components/trainer/one-batch-details/one-batch-details.component';
import { ConfirmBoxConfigModule, DialogConfigModule, NgxAwesomePopupModule } from '@costlydeveloper/ngx-awesome-popup';
import { ConfirmBoxInitializerService } from './services/confirm-box-initializer.service';
import { BatchwiseTrainerTopicsComponent } from './components/batchwise-trainer-topics/batchwise-trainer-topics.component';
import { BatchwiseTrainerSubtopicsComponent } from './components/batchwise-trainer-subtopics/batchwise-trainer-subtopics.component';
import { TrainerProfileDetailsComponent } from './components/trainer/profile-details/trainer-profile-details.component';
import { ProfileAssociatedSubtopicsComponent } from './components/trainer/profile-associated-subtopics/profile-associated-subtopics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClgPhotoComponent,
    FooterComponent,
    AwesomeFeaturesComponent,
    PopularCoursesComponent,
    CommunityExpertsComponent,
    AluminiSaysComponent,
    OurCollaboratorsComponent,
    CoursesComponent,
    HomeComponent,
    VisionMissionComponent,
    AboutSymbiosisComponent,
    FounderComponent,
    DirectorComponent,
    PriDirectorComponent,
    ContactUsComponent,
    AdminLoginComponent,
    StaffLoginComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminNavbarComponent,
    SubtopicListComponent,
    UpdateSubtopicComponent,
    AddSubtopicComponent,
    TopicListComponent,
    AddTopicComponent,
    UpdateTopicComponent,
    TopicSubtopicDetailsComponent,
    CourseListComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    CourseTopicDetailsComponent,
    AddBatchComponent,
    BatchListComponent,
    UpdateBatchComponent,
    BatchTrainerDetailsComponent,
    AddTrainerComponent,
    AddProfileComponent,
    TrainerListComponent,
    ProfileListComponent,
    UpdateProfileComponent,
    ProfileDetailsComponent,
    TopicFilterPipe,
    SubtopicFilterPipe,
    BatchFilterPipe,
    ProfileFilterPipe,
    TrainerFilterPipe,
    CourseFilterPipe,
    TrainerDashboardComponent,
    TrainerHeaderComponent,
    TrainerNavbarComponent,
    OneProfileComponent,
    OneProfileDetailsComponent,
    AssociatedSubtopicComponent,
    AssociatedBatchesComponent,
    UpdateOneProfileComponent,
    OneBatchDetailsComponent,
    BatchwiseTrainerTopicsComponent,
    BatchwiseTrainerSubtopicsComponent,
    TrainerProfileDetailsComponent,
    ProfileAssociatedSubtopicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserAnimationsModule,
    NgxAwesomePopupModule,
    DialogConfigModule,
    ConfirmBoxConfigModule
  ],
  providers: [ConfirmBoxInitializerService],
  bootstrap: [AppComponent]
})
export class AppModule { }