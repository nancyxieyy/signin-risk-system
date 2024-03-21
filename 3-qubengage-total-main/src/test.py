# src/test.py
import unittest
from .index import getTotal  # 确保这里的路径正确

class TestTotalFunction(unittest.TestCase):

    def test_get_total(self):
        # 测试 getTotal 函数
        self.assertEqual(getTotal(['1', '2', '3', '4']), 10)
        self.assertEqual(getTotal(['', '2', '', '4']), 6)
        self.assertEqual(getTotal([None, None, None, None]), 0)
        # 添加更多的测试用例

if __name__ == '__main__':
    unittest.main()
