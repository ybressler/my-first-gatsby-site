# Define parallel processing variables
export GATSBY_CPU_COUNT='physical_cores';

# First build the site
gatsby build;
# This script uploads all contents from "public" to GCP
(cd public; gsutil -m cp -r * gs://test.yaakovbressler.com)
