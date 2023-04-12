import subprocess
from main.settings import MEDIA_ROOT, GREP_MAX_RESULT


class Grepper:
    def by_keywords(self, keywords):
        commands = [
            "/bin/sh",
            "-c",
            'LC_ALL=C grep -F -ir -m1 "{}" {} | head -{}'.format(
                keywords, MEDIA_ROOT, GREP_MAX_RESULT
            ),
        ]

        p = subprocess.run(commands, shell=True)

        output = p.stdout
        return str(output) if output != b"" else ""
