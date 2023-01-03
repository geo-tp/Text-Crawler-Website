from django.shortcuts import render
from django.views.decorators.cache import cache_page
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from .grepper import Grepper
from .parser import Parser

class SearchView(APIView):

    grepper = Grepper()
    parser = Parser()
    paginator = PageNumberPagination()
    paginator.page_size = 100

    # /search/?q=query endpoints, cached 2hours
    @method_decorator(cache_page(60*60*2))
    def get(self, request):

        keywords = request.query_params.get("q")
        
        unformatted_results = self.grepper.by_keywords(keywords)
        results = self.parser.format_grep_results(unformatted_results, keywords)
        paginated_results = self.paginator.paginate_queryset(results, request)

        return self.paginator.get_paginated_response(paginated_results)


search_view = SearchView.as_view()