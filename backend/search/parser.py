from main.settings import MEDIA_ROOT, RESULT_CATEGORY

class Parser:

    categories = RESULT_CATEGORY

    def format_grep_results(self, results) -> list:

        formatted_results_by_cat = []

        for cat in self.categories:
            formatted_results_by_cat.append([])

        splited_results = results.split("\\n")
        for line in splited_results:

            if (line):
                result = self._format_result(line)

                if (result):
                    try:
                        indexOfCat = self.categories.index(result["source"])
                        formatted_results_by_cat[indexOfCat].append(result)
                    except:
                        formatted_results_by_cat[len(formatted_results_by_cat)-1].append(result)

        sortedResults = []
        for catArray in formatted_results_by_cat:
            sortedResults += catArray

        return sortedResults

    def _format_result(self, line) -> dict:
        sanitized_line = line.replace("http:", "http", 1)
        splitted_line = sanitized_line.split(":")
        content = ":".join(splitted_line[1:])

        # not a well formatted line
        if (len(splitted_line) < 2):
            return

        # more than 5K chars, it's probably a html big file with no line return
        if len(content) > 5000:
            return

        title = self._format_title(splitted_line[0])
        content = content
        link = self._format_link(splitted_line[0])
        source = self._format_source(splitted_line[0])

        return {"link":link, "title":title, "content": content, "source": source }

    def _format_link(self, line):
        line = line.replace("http", "http:", 1)

        # Sometimes "b'" can be present in the link for some reason, TODO: find why
        line = line.replace("b'", "")
        line = line.replace('b"', "")

        return line

    def _format_source(self, line) -> str:
        splitted_line = line.split("/")
        
        try:
            media_type_index = splitted_line.index("media") +1
        except:
            media_type_index = 0

        return splitted_line[media_type_index]

    def _format_title(self, title) -> str:
        return title.split("media/").pop()

    def _format_content(self, content) ->str:
        
        # more than 5K chars
        if len(content) > 5000:
            content = content[0:5000]

        return content
