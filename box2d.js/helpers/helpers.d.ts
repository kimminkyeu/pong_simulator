

// * embox2d-helpers.js의 함수 선언을 타 파일에서 이용하기 위한 선언 정의입니다.

//Having to type 'Box2D.' in front of everything makes porting
//existing C++ code a pain in the butt. This function can be used
//to make everything in the Box2D namespace available without
//needing to do that.
// ex. [ using namespace Box2D ] === [ using(Box2D, "b2.+") ]
export declare function using(ns, pattern?: string);


export declare function copyVec2(vec: Box2D.b2Vec2);


export declare function scaleVec2(vec: Box2D.b2Vec2, scale: number);


export declare function scaledVec2(vec: Box2D.b2Vec2, scale: number);


// copy js/ts's array and convert it into c++ box2d array( b2ChainShape )
export declare function createChainShape(readonly vertices: Box2d.b2Vec2[], closedLoop): Box2D.b2ChainShape;


export declare function createPolygonShape(readonly vertices: Box2d.b2Vec2[]): Box2D.b2PolygonShape;


export declare function createRandomPolygonShape(radius: number): Box2D.b2PolygonShape;