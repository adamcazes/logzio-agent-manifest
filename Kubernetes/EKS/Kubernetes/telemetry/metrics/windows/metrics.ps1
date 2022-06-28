#################################################################################################################################
#################################################### Metrics Windows Script #####################################################
#################################################################################################################################

# Load functions
Write-Log "INFO" "Loading metrics functions ..."
. $logzioTempDir\metrics_functions.ps1

# Build enable metrics Helm set
Invoke-Task "Build-EnableMetricsHelmSet" "building enable metrics Helm set"

# Build Logz.io metrics listener URL Helm set
Invoke-Task "Build-LogzioMetricsListenerUrlHelmSet" "building Logz.io metrics listener URL Helm set"

# Build Logz.io metrics token Helm set
Invoke-Task "Build-LogzioMetricsTokenHelmSet" "building Logz.io metrics token Helm set"

# Finished successfully
Exit 0
