using HIDS;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Threading.Tasks;

namespace HIDSTests
{
    [TestClass]
    public class SimpleTests
    {
        private static string TestURL = "http://localhost:9999/";
        private static string TestTag = "GPA.TestDevice.TestTrend";

        public TestContext TestContext { get; set; }

        [TestMethod]
        public void WriteTest()
        {
            API.WritePoints(TestURL, new[] { new Point { Tag = TestTag, Minimum = -1.0D, Maximum = 1.0D, Average = 0.0D, Timestamp = DateTime.UtcNow } });
        }

        [TestMethod]
        public void ReadTest()
        {
            ReadTestAsync().Wait();
        }

        private async Task ReadTestAsync()
        {
            await foreach (Point point in API.ReadPoints(TestURL, new[] { TestTag }, "-1h"))
                TestContext?.WriteLine($"Point = {point.Tag} with Max = {point.Maximum}, Min = {point.Maximum}, Avg = {point.Average} @ {point.Timestamp}");
        }
    }
}
