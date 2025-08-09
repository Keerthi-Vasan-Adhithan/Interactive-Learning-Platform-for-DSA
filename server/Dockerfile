FROM ubuntu:20.04

# Set non-interactive installation
ENV DEBIAN_FRONTEND=noninteractive

# Install dependencies
RUN apt-get update && apt-get install -y \
  g++ \
  openjdk-11-jdk \
  python3 \
  python3-pip \
  nodejs \
  npm \
  && rm -rf /var/lib/apt/lists/*

# Ensure python3 is linked correctly
RUN ln -sf /usr/bin/python3 /usr/bin/python

# Set working directory
WORKDIR /app

# Copy the run.sh script
COPY run.sh /app/run.sh
RUN chmod +x /app/run.sh

# Verify the script exists (for debugging)
RUN ls -l /app/run.sh

CMD ["/bin/bash"]