from django.contrib import admin
from django.urls import include, path
from students import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
    path("api/students/", include("students.urls")),
]