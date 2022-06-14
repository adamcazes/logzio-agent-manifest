{
   "name":"Kubernetes",
   "logo":"https://dytvr9ot2sszz.cloudfront.net/logz-docs/shipper-logos/kubernetes.svg",
   "description":"",
   "hint":"Select the environment where you want to deploy Logz.io Telemetry Collector.",
   "manifest":true,
   "subtypes":[
      {
         "name":"EKS",
         "logo":"https://dytvr9ot2sszz.cloudfront.net/logz-docs/shipper-logos/aws-eks.svg",
         "description":"AWS Kubernetes Service",
         "hint":"Select your cloud Kubernetes service.",
         "datasources":[
            {
               "name":"Kubernetes",
               "logo":"https://dytvr9ot2sszz.cloudfront.net/logz-docs/shipper-logos/kubernetes.svg",
               "description":"Logz.io uses OpenTelemetry instrumentation with Fluentd and Helm charts to deploy and monitor Kubernetes architecture.",
               "hint":"Select the type of data you'd like to ship: logs, metrics, and traces.",
               "params":[
                  {
                     "type":"boolean",
                     "name":"isTaint",
                     "label":"Taints and Tolerations",
                     "description":"Taints allow a node to repel a series of pods. Tolerations are applied to pods and allow them to schedule onto nodes with matching taints. Enable to force deployment on all pods.",
                     "hint":"By checking this option the Logz.io Telemetry Collector will be deployed on all nodes.",
                     "value":true,
                     "params":[
                        
                     ]
                  }
               ],
               "telemetries":[
                  {
                     "type":"LOG_ANALYTICS",
                     "description":"",
                     "hint":"Switch the toggle on if you want Logz.io Telemetry Collector to collect logs from your Kubernetes cluster components and applications pods",
                     "params":[
                        
                     ]
                  },
                  {
                     "type":"METRICS",
                     "description":"",
                     "hint":"Switch the toggle on if you want Logz.io Telemetry Collector to collect metrics from your Kubernetes cluster, nodes and pods",
                     "params":[
                        
                     ],
                     "dashboards":[
                        "1aO3NWtPAtVwO5Ipmc3Deh",
                        "6KQUyksnNT2E40PifmCHR5",
                        "X6YYCFajD56zayxcQOG2H",
                        "M06b1BjTSGsSNZBWeiLnR"
                     ]
                  },
                  {
                     "type":"TRACING",
                     "description":"",
                     "hint":"Switch the toggle on if you want Logz.io Telemetry Collector to collect traces from your instrumented applications in the Kubernetes environment",
                     "params":[
                        
                     ]
                  }
               ]
            }
         ]
      }
   ]
}
