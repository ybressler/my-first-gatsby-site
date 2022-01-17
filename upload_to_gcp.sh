# This script uploads all contents from "public" to GCP
(cd public; gsutil -m cp -r * gs://test.yaakovbressler.com)
