from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from .yasg import urlpatterns as doc_urls
from django.urls import path, include
from store.views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/v1/', include('store.urls')),
    path('', index)


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += doc_urls