# Define parallel processing variables
export GATSBY_CPU_COUNT='physical_cores';

# First build the site
gatsby build;

# Remove all objects and their versions from the bucket – without deleting the bucket
(cd public; gsutil -m rm -a gs://test.yaakovbressler.com/**)

# This script uploads all contents from "public" to GCP
(cd public; gsutil -m cp -r * gs://test.yaakovbressler.com)
