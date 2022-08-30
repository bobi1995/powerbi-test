import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
function App() {
  return (
    <div className="App">
      <PowerBIEmbed
        embedConfig={{
          type: "report",
          id: "8f0fb45a-ff15-4c5f-915a-0ed54f870da0",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=8f0fb45a-ff15-4c5f-915a-0ed54f870da0&groupId=b34ee819-3fa9-4981-8770-c849f76afe6d&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUUtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
          accessToken:
            "H4sIAAAAAAAEAB2Tt66EVgAF_-W1WGJhiZZckJacL2k7cs4Zy_uZ-u0U43m_P1jxXc3xtnPnz8D1DKNXYTXqgrMlvqKyUeQccuuBh8okecj79LmC167OtS4Eoeybn-s6k4jEj8mcPmW3VHF-bi12YVaRGY6NRmxGbrYsr7o0cJgMkLicPGwBBqgo9xGo3j59GHcQINMkjjA6hlRh43SPuPH2rw4SStJlwobW0NQUxwxK-YiUp5Xqum4b3CSUVLiiNe7txmDJ5DgJxOJaZX3JiW3691e89gxccXCpbf3Rh5dPiF5XkON78QN9mRIbQYMrm8l-5ePvjspWCNAO34-xF2zHBwh-y4Qln6dWJHnNSbKUG9RbvM2-7k1dGXnfNF4re3IStZFZzH_IVVozZTWFF297AlO96R9TIbyieQKQjELR1hZf4FptNLCg4P9qG1DEji-zM_n1HBEKZKJPuBBjU_H4bva3M_KAkF20yedf0v5aqsYil6cu_ACJO61NdUX3sFa0RkdcauXG8k-hIMnZBXx4yNKKzDBlcsiOxyrdogtFP9aI4zZnk_V4VafH97Epb60MgWISrtRXq63RYdWiDB6hLZUfJp9_TtGESSX9hos2ugadyiqs6ymt3iIilbcySw_8UaUofkWm9DvoxFH5tvf4TeA0fauiYdWTmOZhph8bsENV6obHAbXEjPY9nJhtt6WKlC-LKGSiyJOHZk-XIPhWEtwu6Cw2ajCSH5z2N2rZ2jDnbFJR-MX2ccwn7lZmTfzZLl8-Zi8Ke8PMhvtRbpETKmLhpfIRF82e8L13RufiiY9oKbKUwroF2vuiacbkaxHtNY4mi6ctEKCZO2ENsSvRPO4CsuVh819fVFW6I2wUQOMoabNCVCIlksa7ysWaD4rXOW0qrDTzx8_3HJP26jm9--dTCOTgqyolE232sa7yi75OpKpz6ezgdQwcsOE6uKdB2Iww7Gkxl0XBqWEDs-RkCPRMToGObOX5HK3Bi27tvCZMTofDg4koZ6xg469q7GeAtu4Zvl-PwYOKdpAKDDwngqPh1ghUdHrhJIEK2KFy4OBjCkqTirpKppEdvxN2Ta_MwuCpiOWoE12ts11p7Q9gNTQ7MKfkywm_FHVxW-0HHSWYL6dq3yf-_LRLzSelpVsSs6hsCKnasKEB16QbB7Y9cgyR45AwS6-vk4bTwp1tPiAx8fYDi3tEiHoRoo2O8wukJJrVjYs5H6EjNy2VpcZxevUbLlkIyQTaLHwOie9BF5HCOavv_7TfE9Vvsj-r-VXWyLu3DvC_OCpFq8aurFU-T_l1uUQb_uS_2JuF4YS3r4P8_WyuZnXEL_6tF1WfTL6zF3Prp27YNSM1EHu4oaWgAiRxFaY7AtWjzQTDitaRFdORxIxdaQxhZ6AphxijxvMuLdEhXY0aRY4cuNPqyG-NSSjP-ZwG19VUnXpcqVizryEZ-h-2USfGWc_vbd30quE4N_mHHykhUUAGIQR7vevGKA6pjIXor5W8dPzFwNWI_263rCdWJEMQyg3k5uk3cfHPD4GCdVE_a6awHWGkImMIo4M1bvdyNSaLzowwO69oA1DGSqc8RNk6TiuYHkquCJWz1ulsW6H68R6Fzebh0kt-RN0c23hG1DJ5kU3KJVHLXyPs05DJP_uJUsA3_80_MvmeT_0EIGAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUUtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOmZhbHNlfX0=",
          tokenType: models.TokenType.Embed,
        }}
        eventHandlers={
          new Map([
            [
              "loaded",
              function () {
                console.log("Report loaded");
              },
            ],
            [
              "rendered",
              function () {
                console.log("Report rendered");
              },
            ],
            [
              "error",
              function (event) {
                console.log(event.detail);
              },
            ],
          ])
        }
        cssClassName={"report-style-class"}
      />
    </div>
  );
}

export default App;
