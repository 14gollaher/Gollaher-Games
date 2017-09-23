using System;
using System.IO;
using System.Net;

namespace GollaherGames.BusinessLogic
{
    public static class RequestHelper
    {
        public static HttpWebRequest CreatePostRequest(string url)
        {
            return BuildRequest(url, "POST");
        }
        public static HttpWebRequest CreateGetRequest(string url)
        {
            return BuildRequest(url, "GET");
        }
        public static string ServiceCall(HttpWebRequest request, string data = null)
        {
            string responseValue;

            if (data != null)
            {
                using (StreamWriter requestWriter = new StreamWriter(request.GetRequestStream(), System.Text.Encoding.UTF8))
                {
                    requestWriter.Write(data);
                }
            }
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            using (StreamReader streamReader = new StreamReader(response.GetResponseStream()))
            {
                responseValue = streamReader.ReadToEnd();
            }

            return responseValue;
        }
        private static HttpWebRequest BuildRequest(string url, string method)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            request.Method = method;
            request.ContentType = "application/json";
            return request;
        }
    }
}

