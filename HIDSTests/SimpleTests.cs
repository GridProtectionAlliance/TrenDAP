using HIDS;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Threading.Tasks;

namespace HIDSTests
{
    [TestClass]
    public class SimpleTests
    {
        private static string TestURL = "http://localhost:8086/";
        private static string TestTag = "GPA.TestDevice.TestTrend";

        private readonly API m_api = new API();

        public SimpleTests()
        {
            m_api.TokenID = "1Qv02-4lG5GqqR2SC5jU91PWhz_l1hSfRPjRTNc8GUrXqEbpQWToArsVwjvdLAnsxsvH-HFitGYdIHP-VjeLDw==";
            m_api.Connect(TestURL);
        }

        public TestContext TestContext { get; set; }

        [TestMethod]
        public void WriteTest()
        {
            TestContext.WriteLine("Starting write...");
            m_api.WritePoints(new[] { new Point { Tag = TestTag, Minimum = -1.0D, Maximum = 1.0D, Average = 0.0D, Timestamp = DateTime.UtcNow } });
            TestContext.WriteLine("Write complete.");
        }

        [TestMethod]
        public void ReadTest()
        {
            TestContext.WriteLine("Starting read...");
            ReadTestAsync().Wait();
            TestContext.WriteLine("Read complete.");
        }

        private async Task ReadTestAsync()
        {
            await foreach (Point point in m_api.ReadPoints(new[] { TestTag }, "-48h"))
                TestContext.WriteLine($"Point = {point.Tag} with Max = {point.Maximum}, Min = {point.Maximum}, Avg = {point.Average} @ {point.Timestamp}");
        }
    }
}
