import React, { useEffect } from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';

const Router = () => {
  useEffect(() => {
    getRoutes();
  }, []);
  // 获取路由文件
  function getRoutes() {
    const content = require.context('../pages', true, /\.tsx$/);
    console.log(content.keys());

    console.log(content.keys().map(content));
  }
  return (
    <HashRouter>
      <Routes>
        {/* {renderRoute(routes)} */}
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
