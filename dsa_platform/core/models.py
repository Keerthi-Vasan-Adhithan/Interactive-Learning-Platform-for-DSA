from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=20, choices=[('student', 'Student'), ('admin', 'Admin')], default='student')
    progress = models.ManyToManyField('Problem', through='Progress', related_name='user_progress_items')

    def __str__(self):
        return f"{self.user.username} ({self.role})"

class Problem(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    topic = models.CharField(max_length=50)
    test_cases = models.JSONField(default=list)

    def __str__(self):
        return self.title

class Quiz(models.Model):
    title = models.CharField(max_length=200)
    questions = models.JSONField(default=list)
    topic = models.CharField(max_length=50)

    def __str__(self):
        return self.title

class Progress(models.Model):
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='progress_entries')
    problem = models.ForeignKey(Problem, on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)
    score = models.IntegerField(null=True, blank=True)

    class Meta:
        unique_together = ('user_profile', 'problem')

    def __str__(self):
        return f"{self.user_profile} - {self.problem} (Completed: {self.completed})"