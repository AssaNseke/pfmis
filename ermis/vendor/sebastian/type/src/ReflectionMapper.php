<?php declare(strict_types=1);
/*
 * This file is part of sebastian/type.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace SebastianBergmann\Type;

use function assert;
<<<<<<< HEAD
use function sprintf;
=======
use ReflectionFunctionAbstract;
use ReflectionIntersectionType;
>>>>>>> develop
use ReflectionMethod;
use ReflectionNamedType;
use ReflectionType;
use ReflectionUnionType;

final class ReflectionMapper
{
<<<<<<< HEAD
    public function fromMethodReturnType(ReflectionMethod $method): Type
    {
        if (!$this->reflectionMethodHasReturnType($method)) {
            return new UnknownType;
        }

        $returnType = $this->reflectionMethodGetReturnType($method);

        assert($returnType instanceof ReflectionNamedType || $returnType instanceof ReflectionUnionType);

        if ($returnType instanceof ReflectionNamedType) {
            if ($returnType->getName() === 'self') {
                return ObjectType::fromName(
                    $method->getDeclaringClass()->getName(),
=======
    public function fromReturnType(ReflectionFunctionAbstract $functionOrMethod): Type
    {
        if (!$this->hasReturnType($functionOrMethod)) {
            return new UnknownType;
        }

        $returnType = $this->returnType($functionOrMethod);

        assert($returnType instanceof ReflectionNamedType || $returnType instanceof ReflectionUnionType || $returnType instanceof ReflectionIntersectionType);

        if ($returnType instanceof ReflectionNamedType) {
            if ($functionOrMethod instanceof ReflectionMethod && $returnType->getName() === 'self') {
                return ObjectType::fromName(
                    $functionOrMethod->getDeclaringClass()->getName(),
>>>>>>> develop
                    $returnType->allowsNull()
                );
            }

<<<<<<< HEAD
            if ($returnType->getName() === 'static') {
                return new StaticType(
                    TypeName::fromReflection($method->getDeclaringClass()),
=======
            if ($functionOrMethod instanceof ReflectionMethod && $returnType->getName() === 'static') {
                return new StaticType(
                    TypeName::fromReflection($functionOrMethod->getDeclaringClass()),
>>>>>>> develop
                    $returnType->allowsNull()
                );
            }

            if ($returnType->getName() === 'mixed') {
                return new MixedType;
            }

<<<<<<< HEAD
            if ($returnType->getName() === 'parent') {
                $parentClass = $method->getDeclaringClass()->getParentClass();

                // @codeCoverageIgnoreStart
                if ($parentClass === false) {
                    throw new RuntimeException(
                        sprintf(
                            '%s::%s() has a "parent" return type declaration but %s does not have a parent class',
                            $method->getDeclaringClass()->getName(),
                            $method->getName(),
                            $method->getDeclaringClass()->getName()
                        )
                    );
                }
                // @codeCoverageIgnoreEnd

                return ObjectType::fromName(
                    $parentClass->getName(),
=======
            if ($functionOrMethod instanceof ReflectionMethod && $returnType->getName() === 'parent') {
                return ObjectType::fromName(
                    $functionOrMethod->getDeclaringClass()->getParentClass()->getName(),
>>>>>>> develop
                    $returnType->allowsNull()
                );
            }

            return Type::fromName(
                $returnType->getName(),
                $returnType->allowsNull()
            );
        }

<<<<<<< HEAD
        assert($returnType instanceof ReflectionUnionType);
=======
        assert($returnType instanceof ReflectionUnionType || $returnType instanceof ReflectionIntersectionType);
>>>>>>> develop

        $types = [];

        foreach ($returnType->getTypes() as $type) {
<<<<<<< HEAD
            assert($type instanceof ReflectionNamedType);

            if ($type->getName() === 'self') {
                $types[] = ObjectType::fromName(
                    $method->getDeclaringClass()->getName(),
=======
            if ($functionOrMethod instanceof ReflectionMethod && $type->getName() === 'self') {
                $types[] = ObjectType::fromName(
                    $functionOrMethod->getDeclaringClass()->getName(),
>>>>>>> develop
                    false
                );
            } else {
                $types[] = Type::fromName($type->getName(), false);
            }
        }

<<<<<<< HEAD
        return new UnionType(...$types);
    }

    private function reflectionMethodHasReturnType(ReflectionMethod $method): bool
    {
        if ($method->hasReturnType()) {
            return true;
        }

        if (!method_exists($method, 'hasTentativeReturnType')) {
            return false;
        }

        return $method->hasTentativeReturnType();
    }

    private function reflectionMethodGetReturnType(ReflectionMethod $method): ?ReflectionType
    {
        if ($method->hasReturnType()) {
            return $method->getReturnType();
        }

        if (!method_exists($method, 'getTentativeReturnType')) {
            return null;
        }

        return $method->getTentativeReturnType();
=======
        if ($returnType instanceof ReflectionUnionType) {
            return new UnionType(...$types);
        }

        return new IntersectionType(...$types);
    }

    private function hasReturnType(ReflectionFunctionAbstract $functionOrMethod): bool
    {
        if ($functionOrMethod->hasReturnType()) {
            return true;
        }

        if (!method_exists($functionOrMethod, 'hasTentativeReturnType')) {
            return false;
        }

        return $functionOrMethod->hasTentativeReturnType();
    }

    private function returnType(ReflectionFunctionAbstract $functionOrMethod): ?ReflectionType
    {
        if ($functionOrMethod->hasReturnType()) {
            return $functionOrMethod->getReturnType();
        }

        if (!method_exists($functionOrMethod, 'getTentativeReturnType')) {
            return null;
        }

        return $functionOrMethod->getTentativeReturnType();
>>>>>>> develop
    }
}
